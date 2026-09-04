import shared from "./shared.module.css";

export default function Footer() {
  return (
    <footer style={{ padding: "32px 24px", textAlign: "center" }}>
      <p className={shared.paragraph} style={{ fontSize: "0.85rem", color: "#999" }}>
        FotografiaProfessionale.it — The Image Master
      </p>
    </footer>
  );
}
