// src/app/page.tsx

import Link from "next/link";
import Image from "next/image";

export default function BlogPost() {
  return (
    <section id="main" className="subpage">
      {/* Banner Section */}
      <div id="banner" className="relative w-full h-48 bg-gray-50">
        <div className="relative h-full max-w-7xl mx-auto">
          <div className="bannerImg ns"></div>
          <div className="bannerWord"></div>
          <p className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-2xl font-bold">
            ブログ詳細
          </p>
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="bg-gray-100 py-2">
        <ul className="flex items-center gap-2 max-w-7xl mx-auto px-4">
          <li>
            <Link href="/" className="hover:text-blue-600">
              TOP
            </Link>
          </li>
          <li>{">"}</li>
          <li>
            <Link href="/blog" className="hover:text-blue-600">
              ブログ一覧
            </Link>
          </li>
          <li>{">"}</li>
          <li>ミニ簡易型樹脂成形のご紹介</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <article className="space-y-8">
          {/* Date */}
          <div className="text-gray-600">
            <p>2024.04.02</p>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold">ミニ簡易型樹脂成形のご紹介</h1>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p>
              弊社では、エンプラ樹脂を使用した射出成形分野で、さまざまなニーズにお応えしております。新しい技術として「ミニ簡易型」成形を開発し、特に試作品や小ロットの設計・開発段階でのご利用をターゲットとしています。現在、技術的にはまだ開発途中ですが、展示会出展などを通じて市場ニーズを取り入れながら改良を進めております。
            </p>

            {/* Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div>
                <Image
                  src="/mold-image.png"
                  alt="イメージ１"
                  width={400}
                  height={300}
                  className="w-full"
                />
                <p className="text-center text-sm mt-2">イメージ１</p>
              </div>
              <div>
                <Image
                  src="/mold-image.png"
                  alt="イメージ２"
                  width={400}
                  height={300}
                  className="w-full"
                />
                <p className="text-center text-sm mt-2">イメージ２</p>
              </div>
            </div>

            <h2 className="text-xl font-bold mt-8">ミニ簡易型成形とは？</h2>
            <p>
              ミニ簡易型は、従来のモールドベースを使用せず、製品の転写部のみをアルミ金属加工で製作する成形方法です。この簡略化された構造により、初期コストを抑え、効率的な樹脂部品の成形が可能です。試作品や小ロット製品の製造に最適で、以下のような特徴を持っています。
            </p>

            <h3 className="font-bold mt-6">特徴</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                モールドベース不要：製品転写部のみの製作により、型製作や段取りが簡略化されます。
              </li>
              <li>
                簡易射出成形：ハンドプレスや卓上成形機ではなく、弊社の既存射出成型機をそのまま活用可能。
              </li>
              <li>
                成形材料：量産時に使用する一般的な樹脂ペレット材が使用可能。ただし、成形可能な材料には制限があります。
              </li>
              <li>
                コスト効果：金型構造の簡略化により、設計および加工のコスト削減が期待できます。
              </li>
            </ul>

            <h3 className="font-bold mt-8">実績</h3>
            <p>
              現在、当技術は、当社のお客様向けに製品開発段階での試作部品用途としての実績がございます。突き出し構造のないキャビ・コア構造のシンプルな設計を基本としており、深い溝や細かな孔の加工には不向きです。成形材料としては、軟質ポリエチレンやABS樹脂などが利用可能ですが、温調装置がないため、スーパーエンプラ系材料には対応できません。
            </p>

            <p className="mt-8">
              設計開発の簡易的なソリューションとして、今後も皆様のニーズにお応えできるよう技術向上に取り組んでまいります。技術に関するご興味やご相談などは、以下担当者までお気軽にお問い合わせください。
            </p>

            <h3 className="font-bold mt-8">・問合せ先</h3>
            <p>TEL:048-227-5313　FAX:048-227-4161</p>
            <p>アドレス:info@hrts.co.jp</p>
            <p>樹脂営業部　衣笠・楚輪</p>
          </div>
        </article>

        {/* Back Button */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-block px-8 py-3 border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
          >
            一覧に戻る
          </Link>
        </div>
      </div>
    </section>
  );
}
