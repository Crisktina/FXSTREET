import Button from "./Button";

function FilterTypes() {
  return (
    <div className="filtersBox">
      <Button
        iconName="visibility_off"
        text="Hide"
        addText=""
        colorActive="var(--grey-light))"
      />
      <Button
        iconName="tune"
        text="Improve my feed"
        addText=""
        colorActive="var(--grey-light))"
      />
    </div>
  );
}

export default FilterTypes;
