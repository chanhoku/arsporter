import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Image
        src="/home/logo.png"
        alt="logo"
        width={100}
        height={29}
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </div>
  );
}
