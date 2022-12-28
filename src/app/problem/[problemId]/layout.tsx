
"use client"

import { useSplitSize } from '@/hooks/useSplitSize';
import { problemIdAtom } from '@/store/problem';
import { Console } from '@/ui/Console';
import { Editor } from '@/ui/Editor';
import { MyNavbar } from '@/ui/Navbar/Navbar';
import { Navigation } from '@/ui/problem/Navigation';
import { useDocumentTitle } from '@mantine/hooks';
import { Icon24Hours } from '@tabler/icons';
import { useAtom } from 'jotai';
import Split from 'react-split';

const items = [
  {
    value: "/",
    label: "問題文",
    icon: <Icon24Hours size={14} />
  },
  {
    value: "/share",
    label: "共有",
    icon: <Icon24Hours size={14} />
  },
  {
    value: "/submission",
    label: "提出物",
    icon: <Icon24Hours size={14} />
  }
]

export default function Layout({
  children,
  params: { problemId }
}: {
  children: React.ReactNode, params: { problemId: string }
}) {
  const [, setProblemId] = useAtom(problemIdAtom)
  setProblemId(problemId)
  useDocumentTitle("問題1 買い物");
  const { splitSize, setSplitSize } = useSplitSize()

  return (
    <MyNavbar>
      <Split
        className="flex"
        gutter={() => {
          const gutterElement = document.createElement("div");
          gutterElement.className = `w-2 bg-gray-100 hover:cursor-col-resize hover:w-4 hover:bg-blue-300 transition-all delay-50 duration-300 ease-in-out`;
          return gutterElement;
        }}
        gutterStyle={() => ({})}
        onDragEnd={(props) => setSplitSize(props[0])}
        sizes={[splitSize, 100 - splitSize]}
      >
        <div className='flex flex-col'>
          <div className="h-12 py-2">
            <Navigation items={items} />
          </div>
          <div className="max-h-[calc(100vh-6rem)] overflow-auto p-4">
            {children}
          </div>
        </div>
        <Split
          className="flex flex-col h-[calc(100vh-3rem)] relative"
          gutter={() => {
            const gutterElement = document.createElement("div");
            gutterElement.className = `w-full h-2 bg-gray-100 hover:cursor-row-resize hover:h-4 hover:bg-blue-300 transition-all delay-50 duration-300 ease-in-out`;
            return gutterElement;
          }}
          direction="vertical"
          gutterStyle={() => ({})}
          sizes={[60, 40]}
        >
          <Editor />
          <Console />
        </Split>
      </Split>
    </MyNavbar>
  )
}
