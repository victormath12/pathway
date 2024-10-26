import Image from "next/image";

export const Loading = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-lg">
    <Image
      src="/psi-icon.svg"
      alt="PSI"
      width={82 * 2}
      height={27 * 2}
      className="animate-spin"
    />
  </div>
);
