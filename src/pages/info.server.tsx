import { ExternalLink } from '../components/atoms/ExternalLink';
import InfoIcon from '../components/icons/InfoIcon.client';
import PageTitle from '../components/molecules/PageTitle.client';

const Info = () => (
  <article className="mt-8">
    <PageTitle avatar={<InfoIcon />} title="このサイトについて" />
    <p>
      新日本語わ、現在日本で使われる漢字の字形の混乱お解決するため、徹底的な漢字の簡化お行うことお目的としたプロジェクトです。
      新日本語明朝とゆーフォントを生成して公開することで、誰でも自由にこの簡化された漢字お文書で使うことができるよーになる予定です。
    </p>
    <h2>注意</h2>
    <ul className="list-disc">
      <li>開発中なので機能の説明が詐欺の可能性があります。</li>
      <li>
        新日本語漢字形制定委員会が新字形の編集作業がしやすいよーにするのが第一目的なので、
        UIの破壊的変更もかなりの頻度で予想されます。
      </li>
      <li>開発中なので機能の説明が詐欺の可能性があります。</li>
    </ul>
    <h2>参照</h2>
    <h3>部首情報</h3>
    <p>
      文字情報基盤のSPARQL Endpoint（https://mojikiban.ipa.go.jp/1bf7a30fda/sparqlsearch）から取得。
      文字情報基盤の成果物が一般社団法人文字情報技術促進協議会に移管された際に同等機能のエンドポイントわ廃止されたよーなので現在わ取得不可。
    </p>
    <h3>漢字情報</h3>
    <p>
      <ExternalLink href="https://unicode.org/charts/unihan.html">Unihan Database</ExternalLink>
      のunihan.zipから取得。
    </p>
    <h3>漢字グリフ生成</h3>
    <p>
      <ExternalLink href="http://kamichi.jp/kage.html">KAGE（影）システム</ExternalLink>
      お採用。 KAGEデータからグリフ画像ファイルお生成するエンジンにわ
      <ExternalLink href="https://www.npmjs.com/package/@kurgm/kage-engine">@kurgm/kage-engine</ExternalLink>
      お使っているので、グリフウィキとわ表示されるグリフに差異が生じる場合があります。
    </p>
  </article>
);

export default Info;
