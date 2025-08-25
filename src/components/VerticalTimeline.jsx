
const dotColors = {
  white: "bg-[#fce6e9]",      
  red: "bg-[#dd0026]",
};

export default function VerticalTimeline({ items = ["red","navy","red"], gap = 28 }) {
  return (
    <div className="relative">
      {/* Garis vertikal putus-putus */}
      <div className="absolute left-1/2 top-4 bottom-4 -translate-x-1/2  border-l-2 border-dashed border-black" />

      {/* Titik-titik */}
      <ul
        className="relative z-10 flex flex-col items-center py-2"
        style={{ rowGap: `${gap * 4}px` }} // 1 = 4px
      >
        {items.map((color, i) => (
          <li key={i}>
            {/* Lingkaran berwarna + ring putih + border luar */}
            <span
              className={`inline-block w-6 h-6 rounded-full ring-4 border-1 border-black ${
                dotColors[color] ?? dotColors.white
              }`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
