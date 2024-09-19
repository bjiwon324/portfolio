export const projects: Project[] = [
  {
    name: "binder-binFinder",
    team: "기획자 1 명, 디자이너 1명, 프론트 엔드 2명, 백엔드 2명",
    period: "2024.09 - 진행 중",
    address: "https://www.bin-finder.net/",
    gitrepo: "https://github.com/binder-binFinder/binder-front-end",
    skills: ["Typescript", "Next.js", "Sass(SCSS)", "Jotai", "TanStack Query", "axios", "react-hook-form"],
    description: "주변 공공 쓰레기통을 찾아드립니다. 초기 기획부터 팀원들과 같이 작업했습니다.",
    logo: "/icon-binder-logo.svg",
    troubleshooting: [
      {
        title: "아직 프로젝트 진행 단계입니다.",
        problemSituation: "",
        process: [],
        result: [],
      },
    ],
  },
  {
    name: "Global-Nomad",
    team: "프론트엔드 5명",
    period: "2024.03 - 2024.04",
    address: "https://global-nomad.vercel.app/",
    gitrepo: "https://github.com/Codeit-sprint2-4-5/global-nomad",
    skills: ["Typescript", "Next.js", "Sass(SCSS)", "TanStack Query", "axios", "react-hook-form"],
    description: "다양한 체험 상품을 보고 간단하게 예약 할 수 있는 서비스 플랫폼",
    logo: "/icon-global-nomad-logo.svg",
    troubleshooting: [
      {
        title: "서버 데이터 기반 추가 요청 시스템 구현(derived state)",
        problemSituation:
          "프로젝트 진행 중 하나의 컴포넌트에서 서버로부터 데이터를 받아오고, 그 데이터를 기반으로 추가적인 데이터를 서버에 요청해야 하는 상황에 직면했습니다. 이 과정에서 데이터의 동기화 문제와 캐싱 오류가 발생할 가능성이 있어, 사용자 경험에 부정적인 영향을 미칠 우려가 있었습니다. 기존 상태 관리 방식으로는 데이터 간의 의존성 문제를 해결하는 것이 복잡하고 비효율적이라고 판단했습니다.",
        process: [
          {
            littleTitle: "상태관리 방식의 개선 필요성 인식 ",
            text: " 서버 상태를 관리하고, 데이터 간의 의존성을 효과적으로 처리하기 위해 적합한 상태관리 라이브러리의 필요성을 느꼈습니다. 여러 라이브러리를 조사한 결과, TanStack Query가 서버 상태관리에 특화되어 있음을 발견하고, 팀원들에게 사용을 제안하였습니다.",
            more: "TanStack Query의 강점 : 서버 데이터 캐싱, 자동화된 데이터 업데이트, 그리고 derived state를 통한 상태관리의 편리함을 제공.",
          },
          {
            littleTitle: "TanStack Query 도입 ",
            text: "팀원들과 함께 TanStack Query를 학습하고 도입하였습니다. 이를 통해 서버로부터 받은 데이터를 기반으로 추가 데이터 요청이 자동으로 처리되도록 설정하였으며, 데이터 간의 의존성을 관리하면서 상태의 일관성을 유지하는 데 큰 도움을 받았습니다.",
          },
          {
            littleTitle: "사용자 경험 개선을 위한 UI 최적화",
            text: "서버로부터 데이터를 기다리는 동안 사용자가 기다림을 인식할 수 있도록 스켈레톤 UI를 도입하고, 페이지 상단에 로딩 바를 표시하는 기능을 추가했습니다. 이를 통해 데이터 로딩 중에도 시각적인 피드백을 제공하여 사용자 경험을 크게 향상시켰습니다.",
          },
          {
            littleTitle: "관심사의 분리 및 코드 가독성 향상",
            text: "TanStack Query를 사용함으로써 비즈니스 로직과 상태관리 로직을 분리하였고, 이로 인해 코드의 가독성이 높아졌으며, 데이터 관리의 복잡성도 크게 감소하였습니다. 상태관리가 자동화되면서 애플리케이션의 성능 최적화와 유지보수도 수월해졌습니다.",
          },
        ],
        result: [
          "TanStack Query를 통해 데이터 간의 의존성 문제를 해결하고, 상태관리의 복잡성을 대폭 줄였습니다.",
          "사용자에게 더 나은 인터랙션을 제공하기 위한 스켈레톤 UI와 로딩 바 도입으로 사용자 경험이 개선되었습니다.",
          "관심사의 분리를 통해 코드 가독성이 향상되었고, 서버 상태관리 효율성이 크게 증대되었습니다.",
        ],
      },
    ],
  },
  {
    name: "Taskify",
    team: "프론트엔드 5명",
    period: "2024.01 - 2024.02",
    address: "https://taskify-three-xi.vercel.app/",
    gitrepo: "https://github.com/bjiwon324/taskify",
    skills: ["Typescript", " Next.js", " Sass(SCSS)", " TanStack Query", " axios", "react-hook-form"],
    description: "동료들과 함께, 혹은 나만의 일정을 관리 가능한 일정 관리 플랫폼",
    logo: "/icon-taskify-logo.svg",
    troubleshooting: [
      {
        title: "페이지네이션",
        problemSituation:
          "페이지 전환 시 데이터 로딩이 지연되거나, 마지막 페이지에서 데이터가 중복되거나 비정상적으로 로드되는 문제가 발생했습니다. Tanstack Query를 활용한 상태관리에서 캐싱이 제대로 작동하지 않아 불필요한 API 호출이 자주 발생하였고, 이로 인해 서버 부하와 사용자 경험 모두 악화하는 상황이었습니다.",
        process: [
          {
            littleTitle: "데이터 중복 및 누락 문제 해결",
            text: "페이지네이션 로직에서 total page 값이 잘못 계산되어 페이지 이동 중 데이터가 중복되거나 누락되는 문제를 확인했습니다. total page 계산 로직을 면밀히 검토하고, 서버에서 반환되는 데이터의 총 개수를 기반으로 안정적인 계산 방식을 적용했습니다. 데이터를 받지 못하거나 오류가 발생하는 경우에도 최소 1 페이지를 보장하도록 설정해 페이지 이동 시 빈 페이지나 중복된 데이터가 표시되는 문제를 해결했습니다.",
          },
          {
            littleTitle: "프리페칭으로 사용자 경험 개선",
            text: "페이지 전환 시 발생하는 로딩 지연을 해결하기 위해 Tanstack Query의 프리페칭(prefetching) 기능을 활용했습니다. 페이지 전환 전에 데이터를 미리 불러와 캐싱하는 방식으로, 사용자가 페이지를 클릭하면 즉시 다음 페이지 데이터를 확인할 수 있도록 최적화했습니다. 이로 인해 페이지 이동 시 로딩 시간이 거의 없어졌습니다.",
          },
          {
            littleTitle: "API 호출 최적화로 성능 향상",
            text: "각 페이지마다 API 요청이 반복적으로 이루어지는 문제를 해결하기 위해, 이미 캐싱된 데이터는 다시 호출하지 않도록 React Query의 캐싱 로직을 재설계했습니다. 또한, 데이터 변경 시에는 캐시를 무효화하고 다시 불러오는 방식으로 실시간 데이터 동기화를 구현했습니다. 이를 통해 API 호출 수를 최소화하면서도 실시간 데이터 업데이트를 유지할 수 있었습니다.",
          },
          {
            littleTitle: "대시보드의 동적인 UI 성능 개선",
            text: "페이지네이션 문제를 해결하는 과정에서 UI 성능도 함께 최적화했습니다. 페이지 이동 시 발생하는 애니메이션과 로딩 바를 최적화하여 부드러운 사용자 경험을 제공했습니다. 불필요한 re-rendering을 최소화하고, 스켈레톤 UI를 통해 로딩 중에도 빈 화면 대신 시각적 피드백을 제공하여 사용자 불만을 줄였습니다.",
          },
        ],
        result: [
          "페이지 전환 속도가 프리페칭을 통해 크게 개선되었으며, 데이터 중복 및 빈 페이지 문제도 해결되었습니다.",
          "API 호출 횟수를 대폭 줄여 서버 부하를 최소화하면서도 실시간 데이터를 유지할 수 있었습니다.",
          "사용자 경험이 크게 향상되어 페이지 로딩 시간이 거의 없을 정도로 빨라졌고, 부드러운 UI 전환으로 더 나은 사용자 경험을 제공하게 되었습니다.",
        ],
      },
    ],
  },
  {
    name: "Rolling",
    team: "프론트엔드 4명",
    period: "2023.12 - 2023.12",
    address: "https://fluffy-shortbread-07838a.netlify.app/",
    gitrepo: " https://github.com/codeit-sprint2-team-12/team-12-rolling",
    skills: ["Javascript", " React", " React Router", " axios", " emoji-picker-react", " styled-components"],
    description: "추억의 롤링 페이퍼를 웹 상에서도 간편하게 즐길 수 있는 플랫폼",
    logo: "/icon-rolling-logo.svg",
    troubleshooting: [
      {
        title: "",
        problemSituation: "",
        process: [],
        result: [],
      },
    ],
  },
];

export interface Project {
  name: string;
  team: string;
  period: string;
  address: string;
  gitrepo: string;
  skills: string[];
  description: string;
  logo: string;
  troubleshooting: {
    title: string;
    problemSituation: string;
    process: { littleTitle: string; text: string; more?: string }[];
    result: string[];
  }[];
}
