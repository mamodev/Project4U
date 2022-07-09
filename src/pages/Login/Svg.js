export default function Planets({
  moonRef,
  circleRef,
  greyPlanetRef,
  yellowPlanetRef,
  bluePlanetRef,
}) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 818 576"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMaxYMin"
    >
      <g ref={circleRef}>
        <path
          d="M403.521 84.3805C387.69 69.441 386.967 44.4964 401.907 28.6651C416.846 12.8338 441.791 12.1109 457.622 27.0504C473.453 41.9899 474.176 66.9346 459.237 82.7659C444.297 98.5971 419.353 99.32 403.521 84.3805Z"
          fill="#EBEBEB"
        />
        <path
          d="M467.25 70.2081C463.845 66.7366 459.915 63.8227 455.604 61.5732C448.093 57.5097 427.22 52.0555 417.811 46.311C404.58 38.2445 403.468 30.5892 403.855 26.7435C407.592 23.3178 411.952 20.6411 416.698 18.8584C417.363 22.9098 420.06 35.596 442.301 45.4645C453.79 50.5801 465.279 48.7056 469.245 48.0767C470.724 55.4921 470.031 63.1768 467.25 70.2081V70.2081Z"
          fill="#DBDBDB"
        />
        <path
          d="M449.484 90.3321C441.549 94.6572 432.37 96.1294 423.48 94.5029C414.591 92.8763 406.528 88.2495 400.638 81.3948C402.957 80.3587 405.394 79.6074 407.894 79.1575C418.67 77.4402 429.893 83.4387 433.944 86.1597C438.458 89.3642 443.972 90.8444 449.484 90.3321V90.3321Z"
          fill="#DBDBDB"
        />
        <path
          d="M464.445 75.9165L463.877 76.8356L463.345 77.6459C462.934 78.2627 462.522 78.8553 462.135 79.4479C461.748 80.0404 461.325 80.4879 460.926 80.9837L460.454 81.54L459.91 82.1568C459.729 82.3624 459.547 82.568 459.354 82.7615L458.677 83.4629L457.999 84.1402L457.395 84.7086C456.947 85.1198 456.488 85.5188 456.028 85.9179C453.525 86.4622 450.272 85.918 445.64 83.596C438.722 80.2218 431.575 72.8689 418.187 66.7978C409.913 63.1244 400.787 61.8022 391.811 62.9762C390.312 54.9744 391.334 46.7046 394.737 39.309C397.253 39.4178 405.247 41.2197 421.343 56.8206C426.335 61.8054 431.826 66.2633 437.73 70.1236C451.82 79.0125 460.515 77.3798 464.203 75.9165H464.445Z"
          fill="#DBDBDB"
        />
        <path
          d="M428.707 33.0202C427.861 34.5561 425.37 34.8101 423.132 33.5886C420.895 32.3671 419.782 30.1177 420.617 28.5818C421.451 27.0459 423.955 26.804 426.192 28.0255C428.429 29.247 429.542 31.4238 428.707 33.0202Z"
          fill="#C4C4C4"
        />
        <path
          d="M417.34 34.7494C416.868 35.6081 415.393 35.7169 414.051 34.9792C412.708 34.2415 412.019 32.9475 412.49 32.0889C412.962 31.2302 414.438 31.1093 415.78 31.847C417.122 32.5847 417.812 33.8787 417.34 34.7494Z"
          fill="#C4C4C4"
        />
        <path
          d="M443.389 85.724C442.664 87.0422 440.499 87.2358 438.552 86.1594C436.605 85.0831 435.601 83.1602 436.315 81.842C437.028 80.5238 439.205 80.3424 441.152 81.4066C443.099 82.4709 444.103 84.4179 443.389 85.724Z"
          fill="#C4C4C4"
        />
        <path
          d="M436.036 86.4255C435.943 86.8275 435.727 87.1901 435.416 87.4623C435.106 87.7345 434.719 87.9026 434.308 87.9428C433.898 87.983 433.485 87.8934 433.128 87.6866C432.771 87.4797 432.488 87.1661 432.318 86.7899C432.149 86.4136 432.102 85.9937 432.184 85.5894C432.266 85.185 432.473 84.8165 432.775 84.5359C433.078 84.2553 433.46 84.0766 433.87 84.0251C434.279 83.9736 434.694 84.0517 435.057 84.2487C435.469 84.4161 435.8 84.7357 435.982 85.141C436.165 85.5463 436.184 86.0063 436.036 86.4255V86.4255Z"
          fill="#C4C4C4"
        />
        <path
          d="M435.202 82.6766C435.025 82.8882 434.774 83.0247 434.5 83.0584C434.227 83.0921 433.95 83.0204 433.727 82.858C433.134 82.5314 432.844 81.9268 433.074 81.5156C433.253 81.3031 433.506 81.1663 433.782 81.1326C434.058 81.099 434.336 81.171 434.561 81.3342C435.142 81.6607 435.432 82.2654 435.202 82.6766Z"
          fill="#C4C4C4"
        />
        <path
          d="M410.713 80.3425C410.072 81.5519 408.294 81.7696 406.722 80.9109C405.149 80.0523 404.412 78.4076 405.053 77.2828C405.694 76.1581 407.471 75.8558 409.044 76.7144C410.616 77.5731 411.353 79.1695 410.713 80.3425Z"
          fill="#C4C4C4"
        />
        <path
          d="M412.151 75.0819C412.032 75.3746 411.827 75.6241 411.563 75.7977C411.299 75.9713 410.989 76.0606 410.673 76.0539C410.357 76.0472 410.051 75.9447 409.794 75.7601C409.538 75.5755 409.344 75.3175 409.237 75.02C409.131 74.7226 409.117 74.3999 409.198 74.0945C409.279 73.7892 409.451 73.5155 409.69 73.3099C409.93 73.1042 410.227 72.9763 410.541 72.9428C410.855 72.9094 411.172 72.9722 411.45 73.1228C411.802 73.2904 412.073 73.5905 412.205 73.9576C412.336 74.3247 412.317 74.729 412.151 75.0819V75.0819Z"
          fill="#C4C4C4"
        />
        <path
          d="M462.086 79.4474C437.656 74.275 413.87 66.4314 391.156 56.0583C373.499 47.762 362.603 39.8165 364.079 35.3297C365.554 30.843 378.797 30.7825 397.457 34.3743C396.949 35.1604 396.477 35.9586 396.018 36.793C395.849 37.1075 395.691 37.4219 395.522 37.7243C385.593 36.4544 379.014 37.0349 378.119 39.7681C377.224 42.5012 382.328 47.0243 391.338 51.9585C402.725 57.9384 414.619 62.9 426.881 66.7854C439.084 70.9278 451.63 73.9833 464.371 75.9161C474.518 77.2585 481.302 76.6901 482.173 73.9206C483.044 71.1512 478.122 66.8458 469.426 61.9962C469.644 60.6748 469.789 59.3426 469.862 58.0054C487.494 66.2774 498.548 74.5011 497.024 78.9758C495.5 83.4504 481.702 83.4021 462.086 79.4474Z"
          fill="#C4C4C4"
        />
        <path
          d="M459.862 82.1444C448.085 79.6207 436.448 76.4882 424.996 72.7597C413.587 69.1089 402.373 64.8746 391.399 60.0734C366.873 49.1891 351.212 38.0992 353.256 31.7379C355.3 25.3767 374.154 25.5097 399.986 30.8914C399.611 31.363 399.236 31.8468 398.873 32.3426C377.177 28.1824 361.625 28.4122 359.871 33.8664C358.118 39.3207 370.84 48.79 391.242 58.1989C402.382 63.2511 413.805 67.6525 425.455 71.381C437.143 75.1867 449.043 78.3041 461.095 80.7173C483.045 84.9743 498.815 84.7687 500.581 79.2661C502.347 73.7634 489.939 64.5964 470.008 55.3206C470.008 54.7038 470.008 54.1112 469.936 53.4703C493.954 64.1732 509.216 75.118 507.196 81.4067C505.177 87.6954 485.996 87.6349 459.862 82.1444Z"
          fill="#DBDBDB"
        />
      </g>
      <g ref={greyPlanetRef}>
        <path
          d="M573.086 387.532C560.931 383.382 554.442 370.164 558.591 358.009C562.741 345.854 575.959 339.364 588.114 343.514C600.269 347.664 606.759 360.882 602.609 373.037C598.459 385.192 585.242 391.681 573.086 387.532Z"
          fill="#EBEBEB"
        />
        <path
          d="M558.331 372.264C560.497 370.385 562.946 368.859 565.587 367.741C570.195 365.709 582.736 363.484 588.565 360.545C596.728 356.433 597.744 351.995 597.696 349.661C595.666 347.466 593.23 345.683 590.524 344.412C589.944 346.758 587.755 354.087 574.198 358.925C567.195 361.343 560.496 359.747 558.222 359.191C557.001 363.468 557.038 368.007 558.331 372.264V372.264Z"
          fill="#DBDBDB"
        />
        <path
          d="M567.825 384.95C572.284 387.879 577.614 389.186 582.922 388.653C588.23 388.12 593.194 385.78 596.982 382.023C595.665 381.301 594.264 380.745 592.81 380.366C586.558 378.842 579.676 381.83 577.161 383.245C574.352 384.91 571.04 385.515 567.825 384.95V384.95Z"
          fill="#DBDBDB"
        />
        <path
          d="M559.733 375.759L560.024 376.315C560.108 376.497 560.205 376.654 560.302 376.823C560.511 377.21 560.729 377.585 560.955 377.948C561.16 378.274 561.378 378.589 561.596 378.903L561.85 379.254L562.152 379.605L562.454 379.992C562.567 380.137 562.688 380.282 562.817 380.427C562.946 380.572 563.067 380.717 563.18 380.862L563.519 381.225C563.761 381.491 564.002 381.745 564.256 381.999C565.696 382.447 567.643 382.253 570.473 381.129C574.705 379.472 579.253 375.481 587.404 372.554C592.43 370.793 597.843 370.446 603.053 371.55V371.55C604.314 366.917 604.103 362.006 602.448 357.497C600.973 357.437 596.184 358.114 586.001 366.531C582.825 369.216 579.385 371.57 575.733 373.558C567.014 378.117 561.983 376.763 559.878 375.711H559.733V375.759Z"
          fill="#DBDBDB"
        />
        <path
          d="M581.816 384.503C581.404 383.559 579.953 383.293 578.574 383.886C577.196 384.478 576.422 385.736 576.833 386.679C577.244 387.623 578.695 387.889 580.074 387.308C581.453 386.728 582.227 385.458 581.816 384.503Z"
          fill="#C7C7C7"
        />
        <path
          d="M575.238 382.845C575.008 382.313 574.15 382.18 573.315 382.543C572.481 382.906 572.009 383.619 572.239 384.152C572.469 384.684 573.339 384.829 574.162 384.466C574.984 384.103 575.456 383.39 575.238 382.845Z"
          fill="#C7C7C7"
        />
        <path
          d="M593.27 354.28C592.919 353.482 591.661 353.24 590.452 353.772C589.243 354.305 588.553 355.381 588.916 356.191C589.279 357.001 590.525 357.231 591.734 356.699C592.943 356.167 593.596 355.091 593.27 354.28Z"
          fill="#C7C7C7"
        />
        <path
          d="M588.988 353.482C588.848 353.259 588.627 353.101 588.371 353.04C588.116 352.979 587.846 353.02 587.621 353.155C587.374 353.231 587.165 353.399 587.037 353.623C586.909 353.848 586.871 354.113 586.932 354.365C587.104 354.533 587.322 354.647 587.559 354.691C587.796 354.735 588.041 354.707 588.262 354.61C588.482 354.514 588.67 354.354 588.799 354.151C588.928 353.948 588.994 353.711 588.988 353.47V353.482Z"
          fill="#C7C7C7"
        />
        <path
          d="M588.298 355.635C588.204 355.501 588.064 355.408 587.904 355.374C587.745 355.34 587.578 355.369 587.439 355.453C587.076 355.611 586.883 355.949 586.992 356.203C587.081 356.341 587.221 356.439 587.381 356.475C587.542 356.511 587.71 356.483 587.85 356.397C588.008 356.351 588.143 356.247 588.226 356.105C588.309 355.963 588.335 355.795 588.298 355.635V355.635Z"
          fill="#C7C7C7"
        />
        <path
          d="M573.786 355.695C573.736 355.283 573.558 354.896 573.278 354.59C572.997 354.284 572.627 354.074 572.22 353.99C571.813 353.905 571.39 353.95 571.011 354.119C570.631 354.288 570.314 354.572 570.104 354.93C569.895 355.289 569.803 355.704 569.842 356.118C569.881 356.531 570.049 356.922 570.322 357.235C570.595 357.548 570.959 357.768 571.364 357.862C571.768 357.957 572.192 357.923 572.576 357.763C573.007 357.644 573.375 357.361 573.601 356.975C573.827 356.589 573.893 356.13 573.786 355.695Z"
          fill="#C7C7C7"
        />
        <path
          d="M574.343 365.864C574.237 365.653 574.055 365.491 573.833 365.411C573.612 365.332 573.368 365.34 573.152 365.434C572.936 365.529 572.765 365.703 572.674 365.92C572.583 366.137 572.579 366.381 572.662 366.601C572.768 366.812 572.95 366.974 573.172 367.054C573.393 367.133 573.637 367.125 573.853 367.03C574.068 366.936 574.239 366.762 574.331 366.545C574.422 366.328 574.426 366.084 574.343 365.864V365.864Z"
          fill="#C7C7C7"
        />
      </g>
      <g ref={yellowPlanetRef}>
        <path
          d="M778.669 400.824C766.745 396.05 760.949 382.514 765.723 370.59C770.497 358.666 784.033 352.87 795.957 357.644C807.881 362.418 813.677 375.954 808.903 387.878C804.129 399.802 790.592 405.598 778.669 400.824Z"
          fill="#FFC727"
        />
      </g>
      <g ref={bluePlanetRef}>
        <path
          d="M761.443 562.798C768.297 555.631 768.043 544.264 760.876 537.41C753.709 530.556 742.342 530.81 735.488 537.978C728.634 545.145 728.888 556.511 736.056 563.365C743.223 570.219 754.589 569.965 761.443 562.798Z"
          fill="#8CCCE5"
        />
        <path
          d="M754.321 543.525C754.336 542.947 754.522 542.387 754.855 541.914C755.188 541.442 755.654 541.079 756.194 540.871C756.733 540.663 757.322 540.619 757.886 540.745C758.45 540.872 758.964 541.163 759.363 541.581C759.762 541.999 760.029 542.526 760.128 543.096C760.228 543.665 760.157 544.251 759.924 544.78C759.691 545.309 759.306 545.757 758.819 546.068C758.331 546.379 757.763 546.538 757.185 546.526C756.799 546.518 756.419 546.434 756.067 546.278C755.714 546.123 755.395 545.899 755.129 545.621C754.863 545.342 754.655 545.013 754.516 544.653C754.378 544.294 754.311 543.91 754.321 543.525V543.525Z"
          fill="#263238"
        />
        <path
          d="M760.174 553.365C760.179 553.025 760.285 552.695 760.479 552.415C760.672 552.136 760.944 551.92 761.261 551.796C761.577 551.672 761.923 551.645 762.255 551.718C762.587 551.791 762.89 551.961 763.125 552.206C763.36 552.452 763.516 552.762 763.575 553.097C763.633 553.431 763.59 553.776 763.452 554.087C763.314 554.397 763.087 554.66 762.799 554.841C762.512 555.022 762.177 555.113 761.837 555.103C761.387 555.09 760.96 554.9 760.649 554.575C760.338 554.25 760.167 553.815 760.174 553.365V553.365Z"
          fill="#263238"
        />
        <path
          d="M757.898 561.592C758.042 561.621 758.172 561.699 758.266 561.813C758.359 561.927 758.41 562.07 758.41 562.217C758.41 562.364 758.359 562.507 758.266 562.621C758.172 562.735 758.042 562.813 757.898 562.842C757.731 562.836 757.573 562.764 757.459 562.642C757.344 562.521 757.282 562.359 757.285 562.192C757.297 562.035 757.366 561.887 757.479 561.776C757.591 561.666 757.74 561.6 757.898 561.592V561.592Z"
          fill="#263238"
        />
      </g>
      <g ref={moonRef}>
        <path
          d="M140.34 71.8864L131.028 62.5742C130.39 61.9403 129.884 61.1866 129.539 60.3564C129.194 59.5262 129.016 58.6359 129.016 57.7367C129.016 56.8376 129.194 55.9473 129.539 55.1171C129.884 54.2869 130.39 53.5332 131.028 52.8993V52.8993C131.663 52.263 132.417 51.7582 133.247 51.4138C134.077 51.0694 134.967 50.8921 135.866 50.8921C136.764 50.8921 137.654 51.0694 138.484 51.4138C139.314 51.7582 140.068 52.263 140.703 52.8993L150.015 62.2114C150.653 62.8453 151.159 63.599 151.504 64.4292C151.85 65.2594 152.027 66.1497 152.027 67.0489C152.027 67.948 151.85 68.8383 151.504 69.6685C151.159 70.4987 150.653 71.2525 150.015 71.8864V71.8864C149.38 72.5226 148.626 73.0274 147.796 73.3718C146.966 73.7162 146.076 73.8935 145.178 73.8935C144.279 73.8935 143.389 73.7162 142.559 73.3718C141.729 73.0274 140.975 72.5226 140.34 71.8864V71.8864Z"
          fill="#EBEBEB"
        />
        <path
          d="M13.1384 164.197L7.22455 152.43C6.41276 150.812 6.27646 148.937 6.84561 147.219C7.41475 145.5 8.64281 144.077 10.2601 143.263V143.263C11.0611 142.86 11.9339 142.618 12.8284 142.552C13.723 142.486 14.6217 142.597 15.4732 142.879C16.3247 143.161 17.1122 143.609 17.7907 144.195C18.4691 144.782 19.0252 145.497 19.4271 146.299L25.3409 158.066C25.7444 158.867 25.9861 159.74 26.0519 160.634C26.1178 161.529 26.0065 162.427 25.7245 163.279C25.4426 164.13 24.9955 164.918 24.4087 165.596C23.822 166.275 23.1073 166.831 22.3054 167.233V167.233C21.5043 167.636 20.6315 167.878 19.737 167.944C18.8425 168.01 17.9437 167.898 17.0922 167.616C16.2407 167.335 15.4532 166.887 14.7748 166.301C14.0963 165.714 13.5402 164.999 13.1384 164.197V164.197Z"
          fill="#EBEBEB"
        />
        <path
          d="M94.6748 45.5946L87.6726 44.5908C85.88 44.3333 84.2631 43.3747 83.1769 41.9257C82.0907 40.4767 81.6241 38.6558 81.8797 36.863V36.863C82.0057 35.9747 82.3057 35.1201 82.7625 34.3479C83.2193 33.5758 83.8239 32.9014 84.5418 32.3633C85.2596 31.8252 86.0766 31.4339 86.9459 31.212C87.8151 30.9901 88.7196 30.9419 89.6076 31.0701L96.6098 32.0739C97.498 32.1999 98.3527 32.4999 99.1248 32.9567C99.897 33.4135 100.571 34.0181 101.11 34.736C101.648 35.4538 102.039 36.2708 102.261 37.14C102.483 38.0093 102.531 38.9138 102.403 39.8018V39.8018C102.145 41.5943 101.187 43.2112 99.7376 44.2974C98.2886 45.3836 96.4676 45.8502 94.6748 45.5946V45.5946Z"
          fill="#EBEBEB"
        />
        <path
          d="M150.257 138.003L151.261 131C151.387 130.112 151.687 129.257 152.144 128.485C152.601 127.713 153.205 127.039 153.923 126.501C154.641 125.962 155.458 125.571 156.327 125.349C157.197 125.127 158.101 125.079 158.989 125.207V125.207C159.876 125.333 160.729 125.633 161.499 126.089C162.27 126.545 162.943 127.149 163.48 127.866C164.017 128.583 164.407 129.398 164.629 130.266C164.85 131.134 164.898 132.037 164.77 132.923L163.778 139.938C163.517 141.729 162.558 143.344 161.11 144.429C159.662 145.515 157.842 145.983 156.05 145.73V145.73C154.258 145.473 152.641 144.514 151.554 143.065C150.468 141.616 150.002 139.795 150.257 138.003V138.003Z"
          fill="#EBEBEB"
        />
        <path
          d="M0.078125 127.456L0.078125 111.952C0.078125 110.51 1.24767 109.34 2.69036 109.34H11.1197C12.5623 109.34 13.7319 110.51 13.7319 111.952L13.7319 127.456C13.7319 128.899 12.5623 130.069 11.1197 130.069H2.69036C1.24767 130.069 0.078125 128.899 0.078125 127.456Z"
          fill="#EBEBEB"
        />
        <path
          d="M107.35 197.358L100.517 199.184C99.6506 199.416 98.747 199.475 97.8579 199.357C96.9687 199.24 96.1115 198.948 95.3353 198.499C94.5591 198.049 93.8791 197.451 93.3343 196.739C92.7895 196.026 92.3905 195.213 92.1602 194.347V194.347C91.9281 193.479 91.869 192.575 91.9865 191.685C92.104 190.795 92.3957 189.937 92.8449 189.16C93.2942 188.383 93.8922 187.702 94.6047 187.156C95.3173 186.61 96.1304 186.209 96.9977 185.978L103.831 184.152C104.698 183.92 105.602 183.86 106.492 183.978C107.382 184.095 108.24 184.387 109.017 184.836C109.795 185.286 110.476 185.884 111.022 186.596C111.568 187.309 111.968 188.122 112.199 188.989V188.989C112.661 190.742 112.41 192.606 111.502 194.174C110.593 195.743 109.1 196.887 107.35 197.358V197.358Z"
          fill="#EBEBEB"
        />
        <path
          d="M83.6945 195.52C40.1865 195.52 4.91631 160.25 4.91631 116.742C4.91631 73.2338 40.1865 37.9636 83.6945 37.9636C127.202 37.9636 162.473 73.2338 162.473 116.742C162.473 160.25 127.202 195.52 83.6945 195.52Z"
          fill="#EBEBEB"
        />
        <path
          d="M55.032 70.012C54.8337 73.7957 55.8554 77.5432 57.9466 80.7028C60.0585 83.9585 63.019 86.5761 66.5089 88.2734C70.0976 90.075 74.2421 90.4258 78.0825 89.253C81.7215 88.0994 84.8383 85.7019 86.8867 82.4805C84.0862 84.5537 80.8601 85.9788 77.4416 86.6529C75.8416 86.9372 74.204 86.9372 72.6041 86.6529C71.0079 86.4065 69.4608 85.9085 68.0206 85.1774C67.2829 84.8146 66.5331 84.4155 65.8074 83.9681C65.0818 83.5206 64.4046 83.061 63.7636 82.5289C62.4324 81.5201 61.2158 80.3683 60.1355 79.0943C57.8602 76.4274 56.1267 73.3423 55.032 70.012V70.012Z"
          fill="#C7C7C7"
        />
        <path
          d="M83.3561 74.5469C83.7055 71.9204 83.1236 69.2545 81.7113 67.0125C80.2954 64.6825 78.238 62.8098 75.7854 61.6187C74.5213 60.9831 73.144 60.6035 71.7327 60.5018C70.3214 60.4001 68.9039 60.5783 67.5617 61.0261C65.0271 61.8878 62.9193 63.6883 61.6721 66.0571C63.6665 64.8247 65.8867 64.0025 68.2027 63.6384C70.2803 63.3929 72.3842 63.7674 74.2495 64.7147C78.3964 66.7533 81.6408 70.2562 83.3561 74.5469V74.5469Z"
          fill="#C7C7C7"
        />
        <path
          d="M110.033 128.654C109.062 131.051 108.994 133.72 109.84 136.164C110.669 138.703 112.256 140.927 114.387 142.537C115.474 143.386 116.72 144.008 118.051 144.368C119.383 144.727 120.773 144.816 122.139 144.63C124.712 144.275 127.063 142.983 128.742 141.001C126.576 141.717 124.298 142.036 122.018 141.945C120 141.799 118.071 141.053 116.479 139.804C114.788 138.527 113.366 136.928 112.295 135.1C111.169 133.1 110.403 130.918 110.033 128.654V128.654Z"
          fill="#C7C7C7"
        />
        <path
          d="M126.348 137.591C126.783 136.792 127.054 135.914 127.145 135.008C127.236 134.103 127.146 133.188 126.88 132.318C126.355 130.478 125.242 128.859 123.712 127.711C122.927 127.091 122.021 126.643 121.052 126.397C120.083 126.152 119.073 126.113 118.088 126.283C117.185 126.439 116.322 126.777 115.553 127.276C114.784 127.775 114.124 128.424 113.613 129.186C115.127 128.89 116.675 128.821 118.209 128.98C119.458 129.162 120.637 129.667 121.632 130.444C123.944 132.245 125.602 134.756 126.348 137.591Z"
          fill="#C7C7C7"
        />
        <path
          d="M138.285 111.118C137.59 111.769 137.032 112.553 136.646 113.423C136.259 114.294 136.052 115.233 136.036 116.185C136.018 117.215 136.207 118.238 136.591 119.194C136.975 120.149 137.547 121.018 138.273 121.749C139.019 122.498 139.927 123.066 140.927 123.408C141.928 123.75 142.994 123.856 144.042 123.72C145.921 123.51 147.669 122.655 148.988 121.301C147.363 121.363 145.735 121.27 144.127 121.023C142.85 120.833 141.668 120.24 140.752 119.33C139.811 118.374 139.124 117.197 138.757 115.907C138.334 114.348 138.175 112.73 138.285 111.118V111.118Z"
          fill="#C7C7C7"
        />
        <path
          d="M148.043 118.773C148.616 118.383 149.091 117.865 149.431 117.261C149.771 116.657 149.966 115.982 150.003 115.29C150.052 114.53 149.938 113.767 149.669 113.054C149.4 112.341 148.982 111.693 148.442 111.154C147.886 110.594 147.204 110.177 146.452 109.937C145.701 109.697 144.902 109.642 144.125 109.776C143.455 109.876 142.812 110.108 142.233 110.459C141.654 110.81 141.15 111.272 140.751 111.819C141.868 111.97 142.975 112.193 144.065 112.484C144.794 112.668 145.46 113.049 145.987 113.585C146.553 114.158 147.001 114.836 147.306 115.58C147.702 116.604 147.95 117.679 148.043 118.773V118.773Z"
          fill="#C7C7C7"
        />
        <path
          d="M30.336 87.7896C30.2449 88.7374 30.348 89.6938 30.6391 90.6005C30.9303 91.5071 31.4032 92.3448 32.0291 93.0624C32.6984 93.844 33.5171 94.4842 34.4371 94.9452C35.3571 95.4063 36.3599 95.6789 37.3866 95.7472C38.4421 95.8117 39.4982 95.6326 40.4734 95.2237C41.4485 94.8148 42.3165 94.187 43.0102 93.3889C44.2798 91.9939 45.0313 90.2049 45.1387 88.3217C43.9433 89.4465 42.6434 90.4548 41.2566 91.333C40.1783 92.0282 38.9102 92.3706 37.6285 92.3126C36.2938 92.2279 35.0012 91.8123 33.8674 91.1032C32.5177 90.1983 31.3249 89.079 30.336 87.7896Z"
          fill="#C7C7C7"
        />
        <path
          d="M42.72 87.0275C42.8878 86.3543 42.8976 85.6514 42.7486 84.9737C42.5997 84.2961 42.296 83.6621 41.8613 83.1213C41.3926 82.5219 40.802 82.0287 40.1287 81.6744C39.4554 81.32 38.7145 81.1124 37.9551 81.0654C37.1691 81.0099 36.3814 81.1472 35.6606 81.4655C34.9398 81.7837 34.3076 82.2733 33.819 82.8915C33.3755 83.4077 33.04 84.0075 32.8323 84.6556C32.6245 85.3037 32.5488 85.9869 32.6097 86.6647C33.5438 86.0245 34.5218 85.4506 35.5364 84.9474C36.2021 84.5993 36.9519 84.4443 37.7011 84.5C38.5033 84.5482 39.2881 84.7537 40.011 85.1046C41.0006 85.6138 41.9128 86.2613 42.72 87.0275Z"
          fill="#C7C7C7"
        />
        <path
          d="M74.5019 141.316C71.3525 142.741 67.8507 143.199 64.4407 142.631C61.0307 142.064 57.8662 140.496 55.3485 138.127C52.8308 135.758 51.0733 132.695 50.299 129.326C49.5248 125.957 49.7686 122.433 50.9995 119.203C52.2304 115.973 54.393 113.181 57.213 111.181C60.033 109.182 63.3833 108.065 66.839 107.972C70.2947 107.88 73.7 108.815 76.6232 110.661C79.5463 112.506 81.8554 115.178 83.2577 118.338C85.1395 122.547 85.2744 127.33 83.6328 131.638C81.9912 135.946 78.7073 139.427 74.5019 141.316V141.316Z"
          fill="#DBDBDB"
        />
        <path
          d="M59.241 117.165C56.9739 118.177 54.9788 119.712 53.4191 121.644C51.8594 123.576 50.7794 125.85 50.2675 128.279C49.7943 125.398 50.0545 122.444 51.0243 119.69C51.994 116.936 53.6419 114.471 55.8159 112.522C57.9899 110.573 60.6198 109.204 63.4629 108.539C66.306 107.875 69.2706 107.938 72.0831 108.722C74.8955 109.506 77.465 110.986 79.5545 113.025C81.644 115.065 83.186 117.597 84.0382 120.39C84.8904 123.183 85.0253 126.145 84.4304 129.003C83.8356 131.862 82.5302 134.524 80.6347 136.745C81.6167 133.835 81.731 130.701 80.9635 127.727C80.1959 124.753 78.5798 122.067 76.3121 119.995C74.0444 117.924 71.223 116.557 68.1919 116.061C65.1608 115.564 62.0508 115.961 59.241 117.201V117.165Z"
          fill="#C7C7C7"
        />
        <path
          d="M43.3257 128.303C43.236 132.934 44.5792 137.478 47.1715 141.316C49.7955 145.246 53.4188 148.406 57.6688 150.471C62.0124 152.665 67.0281 153.123 71.6974 151.753C76.1554 150.384 80.0179 147.545 82.6543 143.699C79.2664 146.393 75.2943 148.257 71.0565 149.141C70.0438 149.309 69.0222 149.418 67.9968 149.467C66.9837 149.478 65.9718 149.397 64.9734 149.225C62.9576 148.922 61.0025 148.301 59.1805 147.387C58.2493 146.916 57.3181 146.42 56.4231 145.888C55.5282 145.355 54.6575 144.763 53.8593 144.086C52.1903 142.812 50.6727 141.351 49.3362 139.732C46.5709 136.374 44.5251 132.484 43.3257 128.303Z"
          fill="#C7C7C7"
        />
        <path
          d="M24.2534 134.931C22.9977 135.23 21.6812 135.15 20.471 134.701C19.2608 134.251 18.2113 133.452 17.4556 132.406C16.7 131.359 16.2721 130.111 16.2264 128.821C16.1806 127.531 16.5191 126.256 17.1987 125.159C17.8784 124.061 18.8686 123.19 20.044 122.656C21.2193 122.122 22.5268 121.948 23.8007 122.158C25.0745 122.368 26.2573 122.952 27.1991 123.835C28.141 124.718 28.7994 125.861 29.0909 127.118C29.483 128.796 29.1939 130.56 28.2871 132.024C27.3803 133.489 25.9297 134.534 24.2534 134.931V134.931Z"
          fill="#DBDBDB"
        />
        <path
          d="M20.3832 124.99C19.4817 125.202 18.6428 125.623 17.9347 126.22C17.2265 126.816 16.6691 127.572 16.3076 128.424C16.338 127.336 16.6422 126.272 17.1922 125.332C17.7421 124.392 18.52 123.606 19.4541 123.046C20.3882 122.486 21.4484 122.17 22.5367 122.128C23.625 122.086 24.7063 122.319 25.6809 122.805C26.6555 123.291 27.4919 124.015 28.1128 124.91C28.7338 125.804 29.1192 126.841 29.2337 127.924C29.3481 129.007 29.1878 130.102 28.7675 131.107C28.3473 132.111 27.6806 132.994 26.8291 133.673C27.568 132.388 27.7886 130.87 27.4459 129.428C27.0971 127.904 26.1573 126.58 24.833 125.747C23.5088 124.915 21.9083 124.643 20.3832 124.99Z"
          fill="#C7C7C7"
        />
        <path
          d="M13.7673 127.916C13.3134 129.611 13.4281 131.408 14.0938 133.032C14.7556 134.702 15.8695 136.155 17.3107 137.228C18.7849 138.361 20.6377 138.885 22.4868 138.692C24.2452 138.489 25.872 137.66 27.0703 136.358C25.6129 137.022 24.028 137.361 22.4263 137.349C20.9409 137.297 19.51 136.777 18.3387 135.862C17.0858 134.909 16.0361 133.715 15.251 132.35C14.466 130.986 13.9615 129.478 13.7673 127.916Z"
          fill="#C7C7C7"
        />
        <path
          d="M68.9402 177.089C67.1118 177.197 65.2925 176.759 63.713 175.832C62.1335 174.904 60.8649 173.529 60.0678 171.88C59.2707 170.23 58.981 168.382 59.2355 166.568C59.49 164.754 60.2772 163.057 61.4973 161.691C62.7175 160.324 64.3157 159.351 66.0894 158.894C67.8631 158.437 69.7326 158.517 71.4609 159.124C73.1892 159.73 74.6986 160.836 75.7978 162.301C76.8971 163.766 77.5367 165.525 77.6356 167.354C77.7042 168.564 77.5337 169.776 77.1338 170.92C76.7339 172.065 76.1125 173.119 75.305 174.023C74.4975 174.927 73.5198 175.663 72.4277 176.189C71.3356 176.715 70.1505 177.021 68.9402 177.089V177.089Z"
          fill="#DBDBDB"
        />
        <path
          d="M65.9647 162.238C64.6496 162.307 63.3696 162.687 62.2301 163.348C61.0906 164.008 60.124 164.929 59.4099 166.035C59.7184 164.517 60.4046 163.101 61.4051 161.918C62.4057 160.736 63.6883 159.824 65.1344 159.268C66.5804 158.712 68.1433 158.53 69.6785 158.738C71.2137 158.946 72.6717 159.538 73.9177 160.459C75.1636 161.379 76.1573 162.599 76.807 164.006C77.4566 165.412 77.7411 166.96 77.6343 168.505C77.5275 170.051 77.0328 171.545 76.1958 172.848C75.3589 174.152 74.2068 175.224 72.846 175.964C74.1987 174.348 74.8823 172.276 74.7568 170.171C74.7011 169.073 74.4294 167.996 73.9572 167.003C73.4851 166.01 72.8218 165.119 72.0052 164.382C71.1887 163.646 70.2349 163.077 69.1984 162.709C68.1619 162.341 67.0631 162.181 65.9647 162.238V162.238Z"
          fill="#C7C7C7"
        />
        <path
          d="M55.9754 164.729C55.0815 167.008 54.9001 169.504 55.4554 171.889C56.0083 174.324 57.1977 176.569 58.9021 178.395C60.6362 180.29 63.0188 181.464 65.5778 181.684C68.0358 181.85 70.4788 181.19 72.5195 179.81C70.3369 180.525 68.0158 180.711 65.7471 180.354C63.5938 179.945 61.6324 178.845 60.1598 177.222C58.6276 175.592 57.4608 173.654 56.7373 171.538C56.0135 169.346 55.754 167.027 55.9754 164.729Z"
          fill="#C7C7C7"
        />
        <path
          d="M110.154 87.8496C114.327 94.223 123.542 95.5775 130.714 90.873C137.885 86.1686 140.389 77.183 136.204 70.8096C132.02 64.4363 122.829 63.0818 115.645 67.7862C108.461 72.4907 105.994 81.4763 110.154 87.8496Z"
          fill="#DBDBDB"
        />
        <path
          d="M133.059 76.7842C134.141 78.508 134.77 80.4768 134.889 82.5084C135.007 84.5399 134.611 86.5685 133.737 88.4062C138.574 83.4478 139.784 76.2037 136.228 70.7978C132.068 64.4366 122.852 63.0821 115.669 67.7865C113.258 69.2738 111.292 71.3824 109.977 73.8912C108.662 76.3999 108.047 79.2163 108.195 82.045C109.272 78.7345 111.465 75.9005 114.399 74.0269C120.905 69.7699 129.274 70.9914 133.059 76.7842Z"
          fill="#C7C7C7"
        />
        <path
          d="M105.076 77.3285C104.004 78.9708 103.269 80.8098 102.914 82.7385C102.559 84.6672 102.591 86.6472 103.008 88.5635C103.464 90.5614 104.351 92.4353 105.608 94.054C106.854 95.6927 108.381 97.0972 110.119 98.2021C111.92 99.2122 113.892 99.8805 115.936 100.173C117.912 100.421 119.915 100.364 121.874 100.004C125.661 99.3418 129.238 97.7917 132.311 95.4811C128.816 96.498 125.217 97.1186 121.583 97.3314C118.226 97.5771 114.868 96.8553 111.909 95.2513C110.498 94.3923 109.239 93.3053 108.184 92.0344C107.079 90.7886 106.214 89.3495 105.632 87.7895C104.494 84.4189 104.301 80.8008 105.076 77.3285V77.3285Z"
          fill="#C7C7C7"
        />
      </g>
    </svg>
  );
}