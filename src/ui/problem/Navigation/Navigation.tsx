import { Tabs } from "@mantine/core";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";

export type MarkdownProps = {
  items: {
    value: string
    label: string
    icon?: ReactNode
  }[]
};

export function Navigation({ items }: MarkdownProps) {
  const path = usePathname()?.split("/").slice(0, 3).join("/") as string;
  const router = useRouter()

  return (
    <Tabs
      value={(path + '/').split("/")[-1]}
      onTabChange={(value) => router.push(`${path}${value}`)}
      variant="outline"
    >
      <Tabs.List pl={24}>
        {items.map(item => (
          <Tabs.Tab key={item.value} value={item.value} icon={item.icon}>{item.label}</Tabs.Tab>
        ))}
      </Tabs.List>
    </Tabs>
  )
}
