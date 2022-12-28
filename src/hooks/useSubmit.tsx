"use client"

import { stderrAtom, stdinAtom, stdoutAtom } from '@/store/console/atoms';
import { languageAtom, submitLoading } from '@/store/editor/atoms';
import { API_URL } from '@/utils';
import { useLocalStorage } from '@mantine/hooks';
import axios from 'axios';
import { useAtom } from 'jotai';

export function useSubmit() {
  const [language] = useAtom(languageAtom)
  const [, setLoading] = useAtom(submitLoading)
  const [stdin] = useAtom(stdinAtom)
  const [, setStdout] = useAtom(stdoutAtom)
  const [, setStderr] = useAtom(stderrAtom)

  const [code, setCode] = useLocalStorage<string>({
    key: 'code',
    defaultValue: 's = input()\nprint(s)\n',
  });

  const handleSubmit = async (code: string) => {
    setLoading(true);

    const submitCode = code.trim() + "\n"

    setCode(submitCode);

    console.log(code)

    const { stdout, stderr, executionTime } = (await axios.post(`${API_URL}/runner`, {
      language: language,
      sourceCode: submitCode,
      stdin: stdin
    })).data

    setStdout(stdout)
    setStderr(stderr)

    setLoading(false);
  };

  return { code, handleSubmit }
}