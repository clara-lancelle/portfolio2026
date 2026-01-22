import MePng from "../assets/me.png";
export default function MeSection() {
    return (
        <div className="flex flex-row">
            <div>
                <img src={MePng} alt="" />
            </div>
            <div>
                <h2>A propos de moi</h2>
                <h3>Clara Lancelle</h3>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sed amet, voluptate tempore repellat explicabo inventore
                    sequi quae saepe eum iusto velit, doloremque vitae,
                    consequatur enim ex soluta? Exercitationem, cum eveniet?
                </p>
            </div>
        </div>
    );
}
