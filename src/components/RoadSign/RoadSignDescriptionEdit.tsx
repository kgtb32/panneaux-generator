import { useEffect, useState } from "react";
import { RoadSignDescriptionEdit as RoadSignDescriptionEditProps } from "../../models/props/RoadSignDescriptionEdit";
import ComboBox from "../uikit/ComboBox";
import RoadStyles from "../../models/styles/RoadStyles";
import { ComboBoxItem } from "../../models/uikit/Combobox";
import RoadSignDescription from "../RoadSignDescription";
import { RoadStyle } from "../../models/props/RoadStyle";
import Input from "../uikit/Input";

const roadTypesTranslations: any = {
  nationale: "Route Nationale",
  autoroute: "Autoroute",
  liaison: "Liaison",
  itineraireSecondaire: "Itinéraire Secondaire",
  itinerairePrincipal: "Itineraire Principal",
};

const roadTypes: ComboBoxItem[] = Object.keys(RoadStyles).map((k) => ({
  name: roadTypesTranslations[k],
  value: k,
}));

const Roads: any = RoadStyles;
type RoadStyleOrUndef = RoadStyle | undefined;

export default function RoadSignDescriptionEdit(
  props: RoadSignDescriptionEditProps
) {
  const [selectedRoadStyle, setSelectedRoadStyle] = useState<RoadStyleOrUndef>(
    props?.item?.style
  );
  const [roadName, setRoadName] = useState<string>(props?.item?.name ?? "");
  const [roadPay, setRoadPay] = useState<boolean>(
    props?.item?.isPaying ?? false
  );

  useEffect(() => {
    if (selectedRoadStyle && roadName != "")
      props.onChange({
        style: selectedRoadStyle ?? RoadStyles.liaison,
        name: roadName,
        isPaying: roadPay,
      });
  }, [selectedRoadStyle, roadName, roadPay]);

  return (
    <div className="d-flex flex-wrap flex-column">
      {selectedRoadStyle && roadName.trim() != "" && (
        <RoadSignDescription
          name={roadName}
          style={selectedRoadStyle}
          isPaying={roadPay}
        />
      )}
      <p>Type de route :</p>
      <ComboBox
        items={roadTypes}
        change={(v: ComboBoxItem) => {
          setSelectedRoadStyle(Roads[v.value]);
        }}
        value={roadTypes.find((e) => Roads?.[e.value] == selectedRoadStyle)}
        className="w-100"
      />
      <p>Nom de la route :</p>
      <Input
        type="text"
        className="w-auto"
        onChange={(k) => setRoadName(k.target.value)}
        value={roadName}
      />
      <div className="d-flex justify-content-space-between py-2">
        <input
          type="checkbox"
          name="is_paying"
          onChange={(e) => setRoadPay(e.target.checked)}
          checked={roadPay}
        />
        <span>est payant</span>
      </div>
    </div>
  );
}
