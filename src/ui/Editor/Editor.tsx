"use client";

import { useSubmit } from "@/hooks/useSubmit";
import { submitLoading } from "@/store/editor/atoms";
import { Button, useMantineColorScheme } from "@mantine/core";
import type { Monaco } from "@monaco-editor/react";
import MonacoEditor from "@monaco-editor/react";
import clsx from "clsx";
import { useAtom } from "jotai";
import { useRef } from "react";

export function Editor() {
  const editorRef = useRef<{ editor: any; monaco: Monaco }>();

  function handleEditorDidMount(editor: any, monaco: Monaco) {
    editorRef.current = { editor, monaco };
  }

  const { colorScheme } = useMantineColorScheme();

  const { code, handleSubmit } = useSubmit()
  const [loading] = useAtom(submitLoading)

  const onClick = () => {
    const e = editorRef.current?.editor! as { getValue: () => string };
    handleSubmit(e.getValue())
  }

  return (
    <div className={clsx(
      "relative mx-auto h-full overflow-hidden w-full py-2",
      colorScheme === "light" ? "bg-white" : "bg-[#1e1e1e]"
    )}>
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center">
          Python
        </div>
        <Button
          variant="light"
          color="green"
          radius="md"
          type="submit"
          loading={loading}
          onClick={onClick}
        >
          提出
        </Button>
      </div>
      <MonacoEditor
        height="calc(100% - 72px)"
        width="100%"
        value={code}
        defaultLanguage={"python"}
        theme={colorScheme === "light" ? "vs-light" : "vs-dark"}
        options={{
          fontSize: 16,
          tabSize: 2,
          formatOnPaste: true,
          minimap: {
            enabled: false
          },
          scrollbar: {
            horizontalScrollbarSize: "5px",
            verticalScrollbarSize: "5px"
          },
          padding: {
            top: "10px",
            button: "10px"
          },
          scrollBeyondLastLine: false
        }}
        onMount={handleEditorDidMount}
      />
    </div>
  );
}
