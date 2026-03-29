type HeaderProps = {
  name: string;
};

export default function Header({ name }: HeaderProps) {
  return <h1 className="text-3xl font-normal">{name}</h1>;
}
