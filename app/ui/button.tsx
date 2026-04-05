import styles from "@/app/ui/modules/main.module.css";
type ButtonProps = {
  text: string;
  type: "main" | "secondary";
  buttonType: "button" | "submit";
  svg?: string;
  onClick?: () => void;
};

export default function Button({
  text,
  buttonType,
  type,
  svg,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={buttonType}
      onClick={onClick}
      className={
        type == "main" ? `${styles["btn-main"]}` : `${styles["btn-secondary"]}`
      }
    >
      {svg && (
        <svg height="16" viewBox="0 0 16 16" width="16">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d={svg}
            fill="currentColor"
          ></path>
        </svg>
      )}
      <span>{text}</span>
    </button>
  );
}
