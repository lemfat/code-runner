"use client"

import { stderrAtom, stdinAtom, stdoutAtom } from "@/store/console/atoms";
import { submitLoading } from "@/store/editor/atoms";
import { Alert, Button, Container, Flex, LoadingOverlay, Menu, Textarea } from '@mantine/core';
import { IconAlertCircle } from "@tabler/icons";
import { useAtom } from "jotai";

export function Console() {
  const [loading] = useAtom(submitLoading)

  const testcases = [
    { id: 1, input: "3000\n", },
    { id: 2, input: "5000\n", },
    { id: 3, input: "1500\n", },
  ]

  const [stdin, setStdin] = useAtom(stdinAtom)
  const [stdout] = useAtom(stdoutAtom)
  const [stderr] = useAtom(stderrAtom)

  return (
    <Container
      sx={{
        padding: "1rem",
        width: "100%",
        maxWidth: "100%",
        height: "100%",
        overflow: "auto"
      }}
    >
      <LoadingOverlay
        loaderProps={{ color: 'gray', variant: 'bars' }}
        visible={loading}
      />
      <Flex direction="column" gap="md">
        <Textarea
          label="入力"
          placeholder="100"
          value={stdin}
          onChange={e => setStdin(e.target.value)}
          autosize
          minRows={2}
          maxRows={4}
        />
        <Textarea
          label="出力"
          readOnly
          value={stdout}
          error={stderr ? true : false}
          autosize
          minRows={2}
          maxRows={4}
        />
        {stderr && (
          <Alert icon={<IconAlertCircle size={16} />} title="error" color="red" radius="md" sx={{
            minHeight: "2rem",
            maxHeight: "12rem",
            overflow: "auto"
          }}
          >
            <pre>{stderr}</pre>
          </Alert>
        )}
        <div className="flex justify-end">
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <Button>テストケース</Button>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Label>ケース番号</Menu.Label>
              {testcases.map((testcase, i) => (
                <Menu.Item
                  key={testcase.id}
                  onClick={() => setStdin(testcase.input)}
                >
                  {i + 1}
                </Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>

          <Button
            variant="light"
            color="blue"
            radius="md"
            loading={loading}
          >
            実行
          </Button>
        </div>
      </Flex>
    </Container>
  )
}
