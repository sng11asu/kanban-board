import Todo from '../../assets/Icons/To-do.svg';
import InProgress from '../../assets/Icons/in-progress.svg';
import Cancelled from '../../assets/Icons/Cancelled.svg';
import Done from '../../assets/Icons/Done.svg';
import Backlog from '../../assets/Icons/Backlog.svg';
import HighPriority from '../../assets/Icons/Img - High Priority.svg';
import LowPriority from '../../assets/Icons/Img - Low Priority.svg';
import MediumPriority from '../../assets/Icons/Img - Medium Priority.svg';
import NoPriority from '../../assets/Icons/No-priority.svg';
import UrgentColour from '../../assets/Icons/SVG - Urgent Priority colour.svg';
import UrgentGrey from '../../assets/Icons/SVG - Urgent Priority grey.svg';
import ThreeDotMenu from '../../assets/Icons/3 dot menu.svg';
import Display from '../../assets/Icons/Display.svg';
import Add from '../../assets/Icons/add.svg';
import Down from '../../assets/Icons/down.svg';

const Icon = (props) => {
  const iconMap = {
    Todo: Todo,
    Inprogress: InProgress,
    Cancelled: Cancelled,
    Done: Done,
    Backlog: Backlog,
    P4: UrgentGrey,
    P3: HighPriority,
    P2: MediumPriority,
    P1: LowPriority,
    P0: NoPriority,
    UrgentColour: UrgentColour,
    Add: Add,
    Down: Down,
    ThreeDotMenu: ThreeDotMenu,
    Display: Display,
  };

  const iconSrc = iconMap[props.iconName];

  if (!iconSrc) {
    console.error(`Icon "${props.iconName}" not found`);
    return null;
  }

  return <img src={iconSrc} alt="Icon" />;
};

export default Icon;
