import { Markdown } from '@/ui/Markdown'

const statement = `# **問題文**

購入額によって，以下のような割引があるとしよう．

- 3000円以上：800円引
- 3000円未満・2000円以上：500円引
- 2000円未満・1500円以上：300円引

購入額を入力すると，割引後の金額を出力するプログラムを作成しよう．

# **入力**

\`\`\`
price
\`\`\`

- price 購入金額（0以上の整数）

# **出力**

\`\`\`
discounted
\`\`\`

- discounted 割引後の金額（整数）


# **入力**

\`\`\`
price
\`\`\`

- price 購入金額（0以上の整数）

# **出力**

\`\`\`
discounted
\`\`\`

- discounted 割引後の金額（整数）
`

export default function Page() {
  return (
    <Markdown markdown={statement} />
  )
}
