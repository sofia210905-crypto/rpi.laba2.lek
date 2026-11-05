import { useNavigate } from "react-router-dom";

export default function LecturerCard({ lecturer }) {
  const navigate = useNavigate();

  // Счётчик рендеров для замеров (лабораторная №4)
  console.log("Рендер карточки: " + lecturer.name);

  const initials = lecturer.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  const openLecturer = () => navigate(`/lecturers/${lecturer.id}`);

  return (
    <div className="teacher-card" onClick={openLecturer}>
      <div className="teacher-photo">
        {lecturer.photo ? (
          <img src={lecturer.photo} alt={lecturer.name} />
        ) : (
          <div className="photo-placeholder">{initials}</div>
        )}
      </div>

      <div className="teacher-accent-line" />

      <h3 className="teacher-name">{lecturer.name}</h3>

      <p className="teacher-meta">
        {lecturer.degree !== "нет" && <span>{lecturer.degree} • </span>}
        Стаж {lecturer.experience} лет
      </p>

      <p className="teacher-education">{lecturer.education}</p>

      <div className="teacher-disciplines">
        {lecturer.disciplines.slice(0, 2).map((d, i) => (
          <span key={i} className="discipline-tag">
            {d.title}
          </span>
        ))}
        {lecturer.disciplines.length > 2 && (
          <span className="discipline-tag discipline-tag--more">
            +{lecturer.disciplines.length - 2}
          </span>
        )}
      </div>

      <button
        className="btn-details"
        onClick={(e) => {
          e.stopPropagation();
          openLecturer();
        }}
      >
        Подробнее →
      </button>
    </div>
  );
}
