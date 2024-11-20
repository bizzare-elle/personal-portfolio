const projects = [
  {
    label: "ArgoNavis",
    type: "(Website)",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, aspernatur velit esse officia assumenda fugit impedit illo doloribus libero nulla placeat debitis expedita voluptatibus, distinctio alias molestiae tempora, error sequi.",
  },
  {
    label: "CBC Asia",
    type: "(Website)",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, aspernatur velit esse officia assumenda fugit impedit illo doloribus libero nulla placeat debitis expedita voluptatibus, distinctio alias molestiae tempora, error sequi.",
  },
  {
    label: "iQuiz",
    type: "(Desktop Application)",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, aspernatur velit esse officia assumenda fugit impedit illo doloribus libero nulla placeat debitis expedita voluptatibus, distinctio alias molestiae tempora, error sequi.",
  },
  {
    label: "GAPS",
    type: "(Website and UI/UX Design)",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, aspernatur velit esse officia assumenda fugit impedit illo doloribus libero nulla placeat debitis expedita voluptatibus, distinctio alias molestiae tempora, error sequi.",
  },
  {
    label: "Green Stop",
    type: "(UI/UX Design)",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, aspernatur velit esse officia assumenda fugit impedit illo doloribus libero nulla placeat debitis expedita voluptatibus, distinctio alias molestiae tempora, error sequi.",
  },
  {
    label: "Sebastian's Coffee",
    type: "(UI/UX Design)",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, aspernatur velit esse officia assumenda fugit impedit illo doloribus libero nulla placeat debitis expedita voluptatibus, distinctio alias molestiae tempora, error sequi.",
  },
  {
    label: "ICC",
    type: "(UI/UX Design)",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, aspernatur velit esse officia assumenda fugit impedit illo doloribus libero nulla placeat debitis expedita voluptatibus, distinctio alias molestiae tempora, error sequi.",
  },
];

const Projects = () => {
  return (
    <div className="h-[150vh] w-full bg-bg px-[15%] flex flex-col items-center gap-y-5 p-20">
      <h4 className="pb-[50px]">Projects</h4>
      <div className="grid grid-cols-2 gap-10">
        {projects.map(({ type, label, description }) => (
          <div
            key={label}
            className="bg-text/60 pr-5 flex  items-center  gap-10 rounded-md hover:shadow-accent hover:shadow-2xl duration-200"
          >
            <div className="h-[220px] bg-accent w-10 rounded-s-md"></div>
            <div className="flex flex-col">
              <div className="flex  items-center gap-x-3">
                <span className="font-semibold text-[20px] ">{label}</span>
                <span>{type}</span>
              </div>
              <span>{description}</span>
              <button
                type="button"
                className=" bg-text/20 shadow-md py-1 mt-5 w-[100px] rounded-md"
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
