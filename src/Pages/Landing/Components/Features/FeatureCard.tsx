export default function FeatureCard(props: any) {
  const { image, header, content } = props;

  return (
    <div className="p-8 text-center">
      <img className="w-32 h-32 m-auto mb-4" src={image} alt={`feature illustration for ${header}`}></img>
      <div className="font-semibold text-lg">{header}</div>
      <div className="text-sm">{content}</div>
    </div>
  );
}
