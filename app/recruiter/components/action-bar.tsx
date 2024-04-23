import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { HowItWorksModal } from "@/components/modals/how-it-works";
import { useRouter } from "next/navigation";

interface ActionBarProps {
  likeAction: (like: boolean) => void;
}

const ActionBar: React.FC<ActionBarProps> = ({
  likeAction
}) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <HowItWorksModal isOpen={open} onClose={() => setOpen(false)} />

      <div className="flex justify-between items-center gap-2 py-8 w-full">
        <div className="flex flex-col justify-center items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 46 46"
            onClick={() => setOpen(true)}
            className="
                fill-[#3C4144] h-[48px] 
                transition-all ease-in-out 
                cursor-pointer
                hover:fill-[#0B1215]
                "
          >
            <path d="M23 0C10.3021 0 0 10.3021 0 23C0 35.6979 10.3021 46 23 46C35.6979 46 46 35.6979 46 23C46 10.3021 35.6979 0 23 0ZM24.2506 36.1771H20.6317C20.5503 36.1768 20.4723 36.1442 20.4148 36.0865C20.3573 36.0288 20.3251 35.9507 20.3251 35.8692V32.2515C20.3251 32.1701 20.3573 32.0919 20.4148 32.0342C20.4723 31.9765 20.5503 31.944 20.6317 31.9436H24.2506C24.3321 31.944 24.4101 31.9765 24.4675 32.0342C24.525 32.0919 24.5573 32.1701 24.5573 32.2515V35.8692C24.5573 35.9507 24.525 36.0288 24.4675 36.0865C24.4101 36.1442 24.3321 36.1768 24.2506 36.1771ZM26.2871 24.3177C24.3453 25.621 24.0781 26.8154 24.0781 27.9115V29.2292C24.0781 29.3245 24.0403 29.4159 23.9729 29.4833C23.9055 29.5507 23.8141 29.5885 23.7188 29.5885H21.0833C20.988 29.5885 20.8966 29.5507 20.8292 29.4833C20.7618 29.4159 20.724 29.3245 20.724 29.2292V27.9115C20.724 25.2868 21.9315 23.2001 24.4159 21.5314C26.7255 19.9813 28.0312 18.999 28.0312 16.8391C28.0312 15.3705 27.1927 14.2552 25.4569 13.4298C25.0484 13.2358 24.1392 13.0465 23.0204 13.0597C21.6164 13.0777 20.5263 13.4131 19.6866 14.0887C18.1029 15.3633 17.9688 16.7517 17.9688 16.7708C17.903 17.178 17.8693 17.5898 17.8681 18.0023C17.8681 18.0976 17.8303 18.189 17.7629 18.2564C17.6955 18.3238 17.6041 18.3617 17.5088 18.3617H14.9632C14.874 18.3621 14.7878 18.3294 14.7213 18.2699C14.6549 18.2103 14.613 18.1282 14.6038 18.0394C14.5607 17.561 14.5643 17.0796 14.6146 16.6019C14.6409 16.3108 14.8302 13.6886 17.5818 11.4748C19.0085 10.3272 20.8234 9.73068 22.9724 9.70432C24.4938 9.68635 25.9229 9.94391 26.892 10.4015C29.7922 11.7803 31.3854 14.0671 31.3854 16.8391C31.3854 20.8917 28.6769 22.7113 26.2871 24.3177Z" />
          </svg>
          <div className="text-[14px] text-[#A3A3A3]">How it works?</div>
        </div>
        <div className="flex justify-center items-end gap-14">
          <img
            src="/images/Close.png"
            alt="logo"
            className={cn(
              "h-12 md:h-16 lg:h-20 w-auto cursor-pointer transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-200"
            )}
            onClick={() => likeAction(false)}
          />
          <img
            src="/images/Superlike.png"
            alt="logo"
            className={cn(
              "h-20 md:h-24 lg:h-36 w-auto cursor-no-drop transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-200"
            )}
          />
          <img
            src="/images/Like.png"
            alt="logo"
            className={cn(
              "h-12 md:h-16 lg:h-20 w-auto cursor-pointer transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-200"
            )}
            onClick={() => likeAction(true)}
          />
        </div>
        <div
          className="flex flex-col justify-center items-center gap-1"
          onClick={() => router.push("/recruiter/settings")}  
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            className="
                fill-[#3C4144] h-[52px] 
                transition-all ease-in-out 
                cursor-pointer
                hover:fill-[#0B1215]
                "
          >
            <path d="M25 29.6875C27.5888 29.6875 29.6875 27.5888 29.6875 25C29.6875 22.4112 27.5888 20.3125 25 20.3125C22.4112 20.3125 20.3125 22.4112 20.3125 25C20.3125 27.5888 22.4112 29.6875 25 29.6875Z" />
            <path d="M45.9366 29.2969L45.8907 29.2598L42.8086 26.8428C42.6135 26.6884 42.4577 26.4899 42.3541 26.2636C42.2506 26.0373 42.2022 25.7896 42.2129 25.541V24.4121C42.2032 24.1651 42.2521 23.9192 42.3559 23.6948C42.4596 23.4703 42.6151 23.2737 42.8096 23.1211L45.8907 20.7031L45.9366 20.666C46.4117 20.2702 46.7306 19.7182 46.8362 19.1089C46.9417 18.4995 46.8271 17.8724 46.5127 17.3398L42.3418 10.123C42.337 10.1162 42.3328 10.1091 42.3292 10.1016C42.0131 9.57633 41.5231 9.17837 40.9442 8.97679C40.3653 8.7752 39.7341 8.78272 39.1602 8.99805L39.126 9.01074L35.503 10.4687C35.2743 10.5612 35.0269 10.598 34.7812 10.5761C34.5356 10.5542 34.2986 10.4742 34.0899 10.3428C33.7696 10.141 33.4441 9.9502 33.1133 9.77051C32.8989 9.65423 32.7148 9.48918 32.5759 9.28868C32.4369 9.08817 32.3471 8.85782 32.3135 8.61621L31.7676 4.75L31.7559 4.67969C31.6371 4.08086 31.3157 3.54118 30.8459 3.15136C30.376 2.76154 29.7863 2.54533 29.1758 2.53906H20.8243C20.2052 2.54104 19.6067 2.76144 19.1341 3.16143C18.6616 3.56142 18.3454 4.11533 18.2413 4.72559L18.2325 4.78027L17.6885 8.6543C17.6552 8.89522 17.566 9.12502 17.4282 9.32542C17.2903 9.52581 17.1076 9.69126 16.8946 9.80859C16.5629 9.98724 16.2372 10.1768 15.918 10.377C15.7097 10.5076 15.4733 10.587 15.2284 10.6085C14.9834 10.6301 14.7368 10.5932 14.5088 10.501L10.8829 9.03613L10.8487 9.02246C10.2739 8.8069 9.64181 8.79966 9.06228 9.002C8.48275 9.20434 7.99249 9.60344 7.67681 10.1299L7.66411 10.1514L3.48735 17.373C3.17254 17.9062 3.05764 18.5339 3.16319 19.144C3.26875 19.7541 3.58788 20.3067 4.06352 20.7031L4.10942 20.7402L7.19145 23.1572C7.38663 23.3116 7.54239 23.5101 7.64595 23.7364C7.74951 23.9627 7.7979 24.2104 7.78716 24.459V25.5879C7.79694 25.8349 7.74795 26.0808 7.64422 26.3052C7.54049 26.5297 7.38498 26.7263 7.19048 26.8789L4.10942 29.2969L4.06352 29.334C3.58835 29.7298 3.26948 30.2818 3.16392 30.8911C3.05837 31.5005 3.17301 32.1276 3.48735 32.6602L7.65825 39.877C7.66305 39.8838 7.6673 39.8909 7.67095 39.8984C7.98698 40.4237 8.47699 40.8216 9.05588 41.0232C9.63477 41.2248 10.266 41.2173 10.8399 41.002L10.8741 40.9893L14.4942 39.5312C14.7229 39.4388 14.9702 39.402 15.2159 39.4239C15.4616 39.4458 15.6986 39.5258 15.9073 39.6572C16.2276 39.8597 16.5531 40.0505 16.8838 40.2295C17.0983 40.3458 17.2824 40.5108 17.4213 40.7113C17.5602 40.9118 17.6501 41.1422 17.6836 41.3838L18.2266 45.25L18.2383 45.3203C18.3574 45.9201 18.6796 46.4605 19.1506 46.8505C19.6217 47.2404 20.2128 47.456 20.8243 47.4609H29.1758C29.7949 47.459 30.3934 47.2386 30.8659 46.8386C31.3385 46.4386 31.6547 45.8847 31.7588 45.2744L31.7676 45.2197L32.3116 41.3457C32.3455 41.1043 32.4354 40.8742 32.5741 40.6738C32.7128 40.4734 32.8964 40.3082 33.1104 40.1914C33.4444 40.0117 33.7706 39.8213 34.087 39.623C34.2953 39.4924 34.5317 39.413 34.7766 39.3915C35.0216 39.3699 35.2682 39.4068 35.4961 39.499L39.1221 40.959L39.1563 40.9727C39.731 41.1886 40.3633 41.196 40.9429 40.9937C41.5225 40.7913 42.0128 40.392 42.3282 39.8652C42.332 39.8579 42.3363 39.8507 42.3409 39.8438L46.5118 32.6279C46.8272 32.0949 46.9425 31.4669 46.8371 30.8566C46.7317 30.2462 46.4125 29.6933 45.9366 29.2969ZM32.8038 25.3672C32.7326 26.8795 32.2237 28.3385 31.3387 29.5669C30.4537 30.7953 29.2309 31.74 27.819 32.2863C26.407 32.8327 24.8668 32.9569 23.3855 32.6441C21.9042 32.3312 20.5457 31.5947 19.4753 30.5241C18.4048 29.4536 17.6685 28.095 17.3558 26.6137C17.0431 25.1324 17.1676 23.5921 17.7141 22.1802C18.2606 20.7683 19.2055 19.5457 20.434 18.6608C21.6624 17.776 23.1215 17.2672 24.6338 17.1963C25.7195 17.1485 26.8033 17.3271 27.8162 17.7209C28.8292 18.1146 29.7491 18.7148 30.5175 19.4833C31.2859 20.2518 31.886 21.1718 32.2796 22.1847C32.6732 23.1977 32.8517 24.2815 32.8038 25.3672Z" />
          </svg>
          <div className="text-[14px] text-[#A3A3A3]">Settings</div>
        </div>
      </div>
    </>
  );
};

export default ActionBar;
