import { siteImages, productImages } from "./images";

export const brand = {
  name: "Yūbi",
  tagline: "素肌に、静かなご褒美を。",
  description:
    "京都の小さな工房で生まれた、日本の自然素材スキンケア。毎日使うものだから、本当にいいものだけを。",
};

export const navLinks = [
  { href: "/", label: "ホーム" },
  { href: "/products", label: "商品" },
  { href: "/about", label: "ブランド" },
  { href: "/contact", label: "お問い合わせ" },
];

export const products = [
  {
    id: "tsubaki-serum",
    name: "椿オイルセラム",
    nameEn: "Tsubaki Oil Serum", 
    price: "¥8,800",
    description:
      "京都産の椿オイルを贅沢に。肌の奥からじんわり潤う、やわらかな艶肌へ。",
    image: productImages.tsubakiSerum,
  },
  {
    id: "sakura-cream",
    name: "桜モイスチャークリーム",
    nameEn: "Sakura Moisture Cream",
    price: "¥6,200",
    description:
      "桜の花びらエキスが、うるおいの膜で肌を優しく包み込みます。朝晩、使うたび心地よい。",
    image: productImages.sakuraCream,
  },
  {
    id: "matcha-mask",
    name: "抹茶フェイスマスク",
    nameEn: "Matcha Face Mask",
    price: "¥4,500",
    description:
      "宇治抹茶の豊かな緑。週に一度の、静かなリセットタイムを。",
    image: productImages.matchaMask,
  },
  {
    id: "yuzu-toner",
    name: "柚子トーニングローション",
    nameEn: "Yuzu Toning Lotion",
    price: "¥5,400",
    description:
      "高知産柚子のさわやかな香り。洗顔後の肌を、すっと整えてくれます。",
    image: productImages.yuzuToner,
  },
  {
    id: "rice-essence",
    name: "米ぬかブライトエッセンス",
    nameEn: "Rice Bran Bright Essence",
    price: "¥7,100",
    description:
      "米ぬかエキスが、素肌の透明感を引き出します。伝統の知恵を、現代のスキンケアに。",
    image: productImages.riceEssence,
  },
  {
    id: "camellia-cleanser",
    name: "椿クレンジングバーム",
    nameEn: "Camellia Cleansing Balm",
    price: "¥5,800",
    description:
      "メイクも一日の疲れも、やさしく溶かす。洗い上がりは、しっとりやわらか。",
    image: productImages.camelliaCleanser,
  },
];

export const ingredients = [
  {
    icon: "Leaf" as const,
    name: "抹茶",
    nameEn: "Matcha",
    description:
      "宇治の茶畑から届いた、抗酸化力の高い抹茶。肌に静かな輝きを。",
  },
  {
    icon: "Flower2" as const,
    name: "桜",
    nameEn: "Sakura",
    description:
      "春の訪れを告げる桜の花びらエキス。うるおいと透明感のある肌へ。",
  },
  {
    icon: "Droplets" as const,
    name: "椿オイル",
    nameEn: "Camellia Oil",
    description:
      "古くから日本の女性に愛されてきた保湿の宝。肌のバリアをやさしく守ります。",
  },
  {
    icon: "Sun" as const,
    name: "柚子",
    nameEn: "Yuzu",
    description:
      "高知産柚子のさわやかな香りとビタミンC。肌を明るく、健やかに。",
  },
  {
    icon: "Wheat" as const,
    name: "米ぬか",
    nameEn: "Rice Extract",
    description:
      "日本の米文化から生まれた、やわらかなブライトケア。昔から受け継がれる美の知恵。",
  },
];

export const testimonials = [
  {
    name: "ゆき",
    location: "京都",
    text: "椿セラムを使い始めて3ヶ月。肌がもちもちになって、化粧のりが全然違います。毎晩のケアが楽しみで仕方ありません。",
  },
  {
    name: "みか",
    location: "東京",
    text: "パッケージの美しさに惹かれて購入。使ってみると、香りが本当に心地よくて。洗面台に置くだけで、ちょっとした贅沢な気分になります。",
  },
  {
    name: "あや",
    location: "大阪",
    text: "抹茶マスクの週末ルーティンが手放せません。洗い流した後の肌のつるつる感がたまらなくて。友達にも勧めちゃいました。",
  },
];

export const faqs = [
  {
    question: "敏感肌でも使えますか？",
    answer:
      "はい、お使いいただけます。Yūbiの製品は、香料・着色料・パラベン・鉱物油を一切使わず、敏感な肌にもやさしい処方になっています。ただ、アレルギー体質の方や特に敏感な方は、事前にパッチテストをすることをおすすめします。",
  },
  {
    question: "動物実験は行っていますか？",
    answer:
      "いいえ、一切行っていません。Yūbiはクルエルティフリーを掲げ、動物実験をせずに製品開発を行っています。原材料の調達から製造まで、すべての工程で動物福祉に配慮しています。",
  },
  {
    question: "配送にはどのくらいかかりますか？",
    answer:
      "ご注文いただいてから、通常2〜4営業日以内に発送いたします。お届けまでの日数は地域によって異なりますが、関東・関西エリアであれば発送から1〜2日程度で到着します。",
  },
  {
    question: "返品・交換はできますか？",
    answer:
      "未開封・未使用の商品に限り、商品到着後14日以内にご連絡いただければ返品・交換を承ります。開封済みの商品や、お客様都合による返品はお受けできませんのでご了承ください。詳しくはお問い合わせフォームからご連絡ください。",
  },
  {
    question: "保管方法を教えてください。",
    answer:
      "直射日光の当たらない、涼しい場所で保管してください。高温多湿な場所（浴室など）は避けてください。また、開封後は品質を保つため、できるだけ早め（1〜2ヶ月以内）にご使用いただくことをおすすめします。",
  },
];

export const images = siteImages;