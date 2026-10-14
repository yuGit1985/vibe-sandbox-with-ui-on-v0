import type { Customer } from "@/ports/customer";

export const initialCustomers: Customer[] = [
  {
    id: 1,
    name: "佐藤 美咲",
    company: "株式会社ノーススター",
    email: "misaki.sato@northstar.jp",
    phone: "03-4567-8901",
    status: "アクティブ",
    lastContact: "2024/06/18",
    joined: "2023/09/12",
    location: "東京都 渋谷区",
    notes: [
      {
        id: "1-1",
        body: "次回の定例会で新しいプランについて提案する。",
        createdAt: "今日",
      },
      {
        id: "1-2",
        body: "請求書の送付先を経理部に変更済み。",
        createdAt: "2024/06/12",
      },
    ],
  },
  {
    id: 2,
    name: "田中 恒一",
    company: "グローステック株式会社",
    email: "koichi.tanaka@growthtech.jp",
    phone: "06-1234-5678",
    status: "アクティブ",
    lastContact: "2024/06/14",
    joined: "2024/01/08",
    location: "大阪府 大阪市",
    notes: [
      { id: "2-1", body: "7月の展示会に参加予定。", createdAt: "今日" },
      {
        id: "2-2",
        body: "新機能のオンボーディング資料を共有済み。",
        createdAt: "2024/06/12",
      },
    ],
  },
  {
    id: 3,
    name: "鈴木 陽子",
    company: "株式会社アトラス",
    email: "yoko.suzuki@atlas.co.jp",
    phone: "052-9876-5432",
    status: "アクティブ",
    lastContact: "2024/06/11",
    joined: "2022/11/20",
    location: "愛知県 名古屋市",
    notes: [
      { id: "3-1", body: "契約更新の確認を6月末に行う。", createdAt: "今日" },
    ],
  },
  {
    id: 4,
    name: "高橋 恒一",
    company: "ブルーリバー合同会社",
    email: "koichi.takahashi@blueriver.jp",
    phone: "045-1122-3344",
    status: "休止中",
    lastContact: "2024/05/28",
    joined: "2023/04/03",
    location: "神奈川県 横浜市",
    notes: [
      {
        id: "4-1",
        body: "社内体制変更のため、8月まで利用休止。",
        createdAt: "今日",
      },
    ],
  },
  {
    id: 5,
    name: "伊藤 さやか",
    company: "株式会社オービット",
    email: "sayaka.ito@orbit.jp",
    phone: "092-3344-5566",
    status: "アクティブ",
    lastContact: "2024/05/24",
    joined: "2024/02/15",
    location: "福岡県 福岡市",
    notes: [
      {
        id: "5-1",
        body: "導入事例インタビューに協力いただける予定。",
        createdAt: "今日",
      },
    ],
  },
];
