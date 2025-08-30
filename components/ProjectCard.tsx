type Props = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
};

export default function ProjectCard({ title, description, tags, link, image }: Props) {
  return (
    <div className="card overflow-hidden">
      {image ? <img src={image} alt={title} className="w-full h-44 object-cover" /> : <div className="w-full h-44 bg-gray-700" />}
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-300">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map(t => <span key={t} className="text-xs bg-white/5 px-2 py-1 rounded-md">{t}</span>)}
        </div>
        {link && <a href={link} target="_blank" className="btn-primary mt-2 inline-block">View</a>}
      </div>
    </div>
  )
}
