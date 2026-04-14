export default function Skill({ icon, name }: any) {
    return (
      <div className="flex items-center gap-2 bg-pink-50 px-3 py-2 rounded-full text-sm shadow hover:scale-105 transition">
        <span>{icon}</span>
        <span>{name}</span>
      </div>
    );
  }