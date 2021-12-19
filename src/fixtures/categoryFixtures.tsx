import { CategoryType } from "@src/types/categoryTypes";
import { ProductType } from "@src/types/productType";
import { FaBed, FaCar } from "react-icons/fa";
import { GiProcessor, GiPalmTree, GiHouse } from "react-icons/gi";
import { FiSmartphone } from "react-icons/fi";

import mockImg from "@assets/150.png";

export const CATEGORIES_FIXTURE: CategoryType[] = [
  {
    id: 1,
    title: "Processors",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, architecto autem deserunt dolor facere laboriosam nihil nostrum numquam quaerat, quo rerum sapiente, vitae voluptates! Adipisci aliquam amet consequatur consequuntur cupiditate deserunt dolores dolorum facere illum nulla possimus reprehenderit ut, voluptas. A adipisci alias animi asperiores beatae deserunt dolorem earum eum expedita facere facilis id ipsa iste itaque labore maxime minima minus nesciunt nihil, numquam provident quos ratione sapiente sit tempora tenetur voluptate voluptatum. Adipisci alias dolorum ipsum laudantium molestias mollitia, necessitatibus neque officiis quae repudiandae sapiente sequi, suscipit totam voluptate voluptatibus. Ab accusamus aperiam iste officiis optio placeat vel voluptatem.",
    full_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida efficitur dapibus. Ut iaculis in tellus eu sagittis. Morbi sem lacus, ultricies in dapibus quis, dapibus eget ante. Quisque lobortis euismod purus eu imperdiet. Vestibulum pulvinar diam sit amet libero consequat, in commodo ante iaculis. Vestibulum finibus finibus risus nec feugiat. Nunc cursus viverra mauris, vitae porttitor urna viverra non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed eget nulla nec odio mattis aliquam a nec ante. Pellentesque mauris ante, tempor eu massa condimentum, posuere vehicula lectus. Ut tincidunt ipsum sit amet dolor viverra ullamcorper. Vestibulum condimentum ex eget orci maximus, sed viverra nisi hendrerit. Nam tristique id turpis semper interdum. Quisque sollicitudin posuere pretium. Morbi ut tincidunt nisi. Phasellus eget nibh sed mauris hendrerit fringilla ut non ipsum.",
    icon: <GiProcessor />,
    items: [
      {
        id: 1,
        title: "Processor Name",
        price: 100,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        img: mockImg,
      },
    ],
  },
  {
    id: 2,
    title: "Bed",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    full_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida efficitur dapibus. Ut iaculis in tellus eu sagittis. Morbi sem lacus, ultricies in dapibus quis, dapibus eget ante. Quisque lobortis euismod purus eu imperdiet. Vestibulum pulvinar diam sit amet libero consequat, in commodo ante iaculis. Vestibulum finibus finibus risus nec feugiat. Nunc cursus viverra mauris, vitae porttitor urna viverra non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed eget nulla nec odio mattis aliquam a nec ante. Pellentesque mauris ante, tempor eu massa condimentum, posuere vehicula lectus. Ut tincidunt ipsum sit amet dolor viverra ullamcorper. Vestibulum condimentum ex eget orci maximus, sed viverra nisi hendrerit. Nam tristique id turpis semper interdum. Quisque sollicitudin posuere pretium. Morbi ut tincidunt nisi. Phasellus eget nibh sed mauris hendrerit fringilla ut non ipsum.",
    icon: <FaBed />,
    items: [
      {
        id: 1,
        title: "Bed Name",
        price: 100,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, architecto autem deserunt dolor facere laboriosam nihil nostrum numquam quaerat, quo rerum sapiente, vitae voluptates! Adipisci aliquam amet consequatur consequuntur cupiditate deserunt dolores dolorum facere illum nulla possimus reprehenderit ut, voluptas. A adipisci alias animi asperiores beatae deserunt dolorem earum eum expedita facere facilis id ipsa iste itaque labore maxime minima minus nesciunt nihil, numquam provident quos ratione sapiente sit tempora tenetur voluptate voluptatum. Adipisci alias dolorum ipsum laudantium molestias mollitia, necessitatibus neque officiis quae repudiandae sapiente sequi, suscipit totam voluptate voluptatibus. Ab accusamus aperiam iste officiis optio placeat vel voluptatem.",
        img: mockImg,
      },
    ],
  },
  {
    id: 3,
    title: "Smartphones",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    full_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida efficitur dapibus. Ut iaculis in tellus eu sagittis. Morbi sem lacus, ultricies in dapibus quis, dapibus eget ante. Quisque lobortis euismod purus eu imperdiet. Vestibulum pulvinar diam sit amet libero consequat, in commodo ante iaculis. Vestibulum finibus finibus risus nec feugiat. Nunc cursus viverra mauris, vitae porttitor urna viverra non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed eget nulla nec odio mattis aliquam a nec ante. Pellentesque mauris ante, tempor eu massa condimentum, posuere vehicula lectus. Ut tincidunt ipsum sit amet dolor viverra ullamcorper. Vestibulum condimentum ex eget orci maximus, sed viverra nisi hendrerit. Nam tristique id turpis semper interdum. Quisque sollicitudin posuere pretium. Morbi ut tincidunt nisi. Phasellus eget nibh sed mauris hendrerit fringilla ut non ipsum.",
    icon: <FiSmartphone />,
    items: [
      {
        id: 1,
        title: "Smartphones Name",
        price: 100,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        img: mockImg,
      },
    ],
  },
  {
    id: 4,
    title: "Vacation",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    full_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida efficitur dapibus. Ut iaculis in tellus eu sagittis. Morbi sem lacus, ultricies in dapibus quis, dapibus eget ante. Quisque lobortis euismod purus eu imperdiet. Vestibulum pulvinar diam sit amet libero consequat, in commodo ante iaculis. Vestibulum finibus finibus risus nec feugiat. Nunc cursus viverra mauris, vitae porttitor urna viverra non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed eget nulla nec odio mattis aliquam a nec ante. Pellentesque mauris ante, tempor eu massa condimentum, posuere vehicula lectus. Ut tincidunt ipsum sit amet dolor viverra ullamcorper. Vestibulum condimentum ex eget orci maximus, sed viverra nisi hendrerit. Nam tristique id turpis semper interdum. Quisque sollicitudin posuere pretium. Morbi ut tincidunt nisi. Phasellus eget nibh sed mauris hendrerit fringilla ut non ipsum.",
    icon: <GiPalmTree />,
    items: [
      {
        id: 1,
        title: "Vacation Name",
        price: 100,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        img: mockImg,
      },
    ],
  },
  {
    id: 5,
    title: "House",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    full_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida efficitur dapibus. Ut iaculis in tellus eu sagittis. Morbi sem lacus, ultricies in dapibus quis, dapibus eget ante. Quisque lobortis euismod purus eu imperdiet. Vestibulum pulvinar diam sit amet libero consequat, in commodo ante iaculis. Vestibulum finibus finibus risus nec feugiat. Nunc cursus viverra mauris, vitae porttitor urna viverra non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed eget nulla nec odio mattis aliquam a nec ante. Pellentesque mauris ante, tempor eu massa condimentum, posuere vehicula lectus. Ut tincidunt ipsum sit amet dolor viverra ullamcorper. Vestibulum condimentum ex eget orci maximus, sed viverra nisi hendrerit. Nam tristique id turpis semper interdum. Quisque sollicitudin posuere pretium. Morbi ut tincidunt nisi. Phasellus eget nibh sed mauris hendrerit fringilla ut non ipsum.",
    icon: <GiHouse />,
    items: [
      {
        id: 1,
        title: "House Name",
        price: 100,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        img: mockImg,
      },
    ],
  },
  {
    id: 6,
    title: "Car",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    full_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida efficitur dapibus. Ut iaculis in tellus eu sagittis. Morbi sem lacus, ultricies in dapibus quis, dapibus eget ante. Quisque lobortis euismod purus eu imperdiet. Vestibulum pulvinar diam sit amet libero consequat, in commodo ante iaculis. Vestibulum finibus finibus risus nec feugiat. Nunc cursus viverra mauris, vitae porttitor urna viverra non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed eget nulla nec odio mattis aliquam a nec ante. Pellentesque mauris ante, tempor eu massa condimentum, posuere vehicula lectus. Ut tincidunt ipsum sit amet dolor viverra ullamcorper. Vestibulum condimentum ex eget orci maximus, sed viverra nisi hendrerit. Nam tristique id turpis semper interdum. Quisque sollicitudin posuere pretium. Morbi ut tincidunt nisi. Phasellus eget nibh sed mauris hendrerit fringilla ut non ipsum.",
    icon: <FaCar />,
    items: [
      {
        id: 1,
        title: "Car Name",
        price: 100,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        img: mockImg,
      },
    ],
  },
];
