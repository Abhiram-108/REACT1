import Interest from "./Interest";
import Profile from "./Profile";
import Settings from "./Settings";
import { useState } from "react";

export default Tabform = () => {
  const [activetab, setactivetab] = useState(0);
  const [data, setdata] = useState({
    name: "ABHIRAM",
    age: "18",
    email: "abhiram.pedada108@gmail.com",
    theme: "dark",
    interest: ["coding", "music"],
  });
  const tabs = [
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "Interest",
      component: Interest,
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];
  const Activecomponent = tabs[activetab].component;
  return (
    <div>
      <div className="heading-container">
        {tabs.map((t, index) => (
          <div
            key={index}
            className="heading"
            onClick={() => setactivetab(index)}
          >
            {t.name}
          </div>
        ))}
      </div>
      <div className="tab-body">
        <Activecomponent data={data} setdata={setdata} />
      </div>
    </div>
  );
};
