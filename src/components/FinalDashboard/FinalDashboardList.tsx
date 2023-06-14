import FinalDashboardItem from "./FinalDashboardItem";

const FinalDashboardList: React.FC<{ finalSplit: { [key: string]: any } }> = (
  props
) => {
  return (
    <div>
      <ul>
        {Object.keys(props.finalSplit).map((name: string) => (
          <li key={name}>
            <FinalDashboardItem
              name={props.finalSplit[name].name}
              items={props.finalSplit[name].items}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FinalDashboardList;
