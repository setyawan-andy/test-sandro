type ArticleType = {
  id: number
  title: JSX.Element
  mainImage: string
  mainImage2?: string
  p1: string
  p2: string
  p3: string
  p4: string
  p5: JSX.Element
  subImage: string
  subImage2?: string
  subImage3?: string
  p6: string
  p7: string
}

export const articles: ArticleType[] = [
  {
    id: 1,
    title: (
      <div className="text-center mb-5">
        <h3 className="bold font__size--32 text__32-1024 text-uppercase mb-3">
          Cargo flow through better supply chain{" "}
          <br className="d-none d-sm-block" /> visibility, control.
        </h3>
        <div className="d-flex align-items-center justify-content-center">
          <h5 className="mb-0 semi-bold font__size--14 text__14-1024 text-uppercase color__orange">
            oil & gas
          </h5>
          <span className="font__size--14 text__14-1024 text-uppercase color__gray-1 px-2">
            |
          </span>
          <h5 className="mb-0 semi-bold font__size--14 text__14-1024 text-uppercase color__gray-1">
            29 Nov 2022
          </h5>
        </div>
      </div>
    ),
    mainImage: "/images/as (1).png",
    mainImage2: "/images/as (2).png",
    p1: `Lorem ipsum dolor sit amet consectetur. Facilisis natoque
    aliquam arcu eget risus luctus sed consectetur. Rhoncus cursus
    ac pretium nibh ipsum leo nibh. Eu fames morbi id magna egestas
    commodo leo egestas. Sed sed nisl scelerisque semper. Ante
    tempus nisi est molestie egestas blandit et. Enim quisque
    aliquet sit tellus eu faucibus sed lacinia orci. Aenean sed
    malesuada luctus non facilisi eget pellentesque fermentum
    pellentesque. Risus faucibus vitae libero phasellus leo. Sapien
    nunc lacinia quam ut sit. Consectetur cras varius posuere a.
    Arcu ut arcu massa cursus quisque. Lorem eget ac convallis nec
    tincidunt facilisis dolor augue pellentesque.`,
    p2: `Maecenas in pharetra hendrerit neque, tellus eu. Arcu tempus,
    vel blandit adipiscing a sed cursus. Augue vestibulum tempus
    lectus gravida condimentum mauris iaculis. Sodales imperdiet id
    maecenas molestie id.`,
    p3: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
    pellentesque ut pellentesque varius amet mauris. Tempor, risus,
    congue gravida nulla tincidunt nec diam. Tincidunt magnis eu,
    vitae dictumst commodo dolor in. Aenean dictumst risus posuere a
    at id fermentum nibh. Luctus nunc bibendum duis egestas
    scelerisque.`,
    p4: `Maecenas in pharetra hendrerit neque, tellus eu. Arcu tempus,
    vel blandit adipiscing a sed cursus. Augue vestibulum tempus
    lectus gravida condimentum mauris iaculis. Sodales imperdiet id
    maecenas molestie id.`,
    p5: (
      <ul className="normal roboto font__size--16 text__16-1024 color__gray-1 pl-4 mb-3">
        <li>Id pellentesque ut pellentesque varius amet mauris. </li>
        <li>Tempor, risus, congue gravida nulla tincidunt. </li>
        <li>Tincidunt magnis eu, vitae dictumst. </li>
        <li>Aenean dictumst risus posuere a at id fermentum nibh.</li>
      </ul>
    ),
    subImage: `/images/as (2).png`,
    p6: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
        pellentesque ut pellentesque varius amet mauris. Tempor, risus,
        congue gravida nulla tincidunt nec diam. Tincidunt magnis eu,
        vitae dictumst commodo dolor in. Aenean dictumst risus posuere a
        at id fermentum nibh. Luctus nunc bibendum duis egestas
        scelerisque.`,
    p7: `Maecenas in pharetra hendrerit neque, tellus eu. Arcu tempus,
        vel blandit adipiscing a sed cursus. Augue vestibulum tempus
        lectus gravida condimentum mauris iaculis. Sodales imperdiet id
        maecenas molestie id.`,
  },
  {
    id: 2,
    title: (
      <div className="text-center mb-5">
        <h3 className="bold font__size--32 text__32-1024 text-uppercase mb-3">
          Cargo flow through better supply chain{" "}
          <br className="d-none d-sm-block" /> visibility, control.
        </h3>
        <div className="d-flex align-items-center justify-content-center">
          <h5 className="mb-0 semi-bold font__size--14 text__14-1024 text-uppercase color__orange">
            oil & gas
          </h5>
          <span className="font__size--14 text__14-1024 text-uppercase color__gray-1 px-2">
            |
          </span>
          <h5 className="mb-0 semi-bold font__size--14 text__14-1024 text-uppercase color__gray-1">
            29 Nov 2022
          </h5>
        </div>
      </div>
    ),
    mainImage: "/images/as (1).png",
    p1: `Lorem ipsum dolor sit amet consectetur. Facilisis natoque
    aliquam arcu eget risus luctus sed consectetur. Rhoncus cursus
    ac pretium nibh ipsum leo nibh. Eu fames morbi id magna egestas
    commodo leo egestas. Sed sed nisl scelerisque semper. Ante
    tempus nisi est molestie egestas blandit et. Enim quisque
    aliquet sit tellus eu faucibus sed lacinia orci. Aenean sed
    malesuada luctus non facilisi eget pellentesque fermentum
    pellentesque. Risus faucibus vitae libero phasellus leo. Sapien
    nunc lacinia quam ut sit. Consectetur cras varius posuere a.
    Arcu ut arcu massa cursus quisque. Lorem eget ac convallis nec
    tincidunt facilisis dolor augue pellentesque.`,
    p2: `Maecenas in pharetra hendrerit neque, tellus eu. Arcu tempus,
    vel blandit adipiscing a sed cursus. Augue vestibulum tempus
    lectus gravida condimentum mauris iaculis. Sodales imperdiet id
    maecenas molestie id.`,
    p3: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
    pellentesque ut pellentesque varius amet mauris. Tempor, risus,
    congue gravida nulla tincidunt nec diam. Tincidunt magnis eu,
    vitae dictumst commodo dolor in. Aenean dictumst risus posuere a
    at id fermentum nibh. Luctus nunc bibendum duis egestas
    scelerisque.`,
    p4: `Maecenas in pharetra hendrerit neque, tellus eu. Arcu tempus,
    vel blandit adipiscing a sed cursus. Augue vestibulum tempus
    lectus gravida condimentum mauris iaculis. Sodales imperdiet id
    maecenas molestie id.`,
    p5: (
      <ul className="normal roboto font__size--16 text__16-1024 color__gray-1 pl-4 mb-3">
        <li>Id pellentesque ut pellentesque varius amet mauris. </li>
        <li>Tempor, risus, congue gravida nulla tincidunt. </li>
        <li>Tincidunt magnis eu, vitae dictumst. </li>
        <li>Aenean dictumst risus posuere a at id fermentum nibh.</li>
      </ul>
    ),
    subImage: `/images/as (2).png`,
    p6: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
        pellentesque ut pellentesque varius amet mauris. Tempor, risus,
        congue gravida nulla tincidunt nec diam. Tincidunt magnis eu,
        vitae dictumst commodo dolor in. Aenean dictumst risus posuere a
        at id fermentum nibh. Luctus nunc bibendum duis egestas
        scelerisque.`,
    p7: `Maecenas in pharetra hendrerit neque, tellus eu. Arcu tempus,
        vel blandit adipiscing a sed cursus. Augue vestibulum tempus
        lectus gravida condimentum mauris iaculis. Sodales imperdiet id
        maecenas molestie id.`,
  },
  {
    id: 3,
    title: (
      <div className="text-center mb-5">
        <h3 className="bold font__size--32 text__32-1024 text-uppercase mb-3">
          Cargo flow through better supply chain{" "}
          <br className="d-none d-sm-block" /> visibility, control.
        </h3>
        <div className="d-flex align-items-center justify-content-center">
          <h5 className="mb-0 semi-bold font__size--14 text__14-1024 text-uppercase color__orange">
            oil & gas
          </h5>
          <span className="font__size--14 text__14-1024 text-uppercase color__gray-1 px-2">
            |
          </span>
          <h5 className="mb-0 semi-bold font__size--14 text__14-1024 text-uppercase color__gray-1">
            29 Nov 2022
          </h5>
        </div>
      </div>
    ),
    mainImage: "/images/as (1).png",
    p1: `Lorem ipsum dolor sit amet consectetur. Facilisis natoque
    aliquam arcu eget risus luctus sed consectetur. Rhoncus cursus
    ac pretium nibh ipsum leo nibh. Eu fames morbi id magna egestas
    commodo leo egestas. Sed sed nisl scelerisque semper. Ante
    tempus nisi est molestie egestas blandit et. Enim quisque
    aliquet sit tellus eu faucibus sed lacinia orci. Aenean sed
    malesuada luctus non facilisi eget pellentesque fermentum
    pellentesque. Risus faucibus vitae libero phasellus leo. Sapien
    nunc lacinia quam ut sit. Consectetur cras varius posuere a.
    Arcu ut arcu massa cursus quisque. Lorem eget ac convallis nec
    tincidunt facilisis dolor augue pellentesque.`,
    p2: `Maecenas in pharetra hendrerit neque, tellus eu. Arcu tempus,
    vel blandit adipiscing a sed cursus. Augue vestibulum tempus
    lectus gravida condimentum mauris iaculis. Sodales imperdiet id
    maecenas molestie id.`,
    p3: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
    pellentesque ut pellentesque varius amet mauris. Tempor, risus,
    congue gravida nulla tincidunt nec diam. Tincidunt magnis eu,
    vitae dictumst commodo dolor in. Aenean dictumst risus posuere a
    at id fermentum nibh. Luctus nunc bibendum duis egestas
    scelerisque.`,
    p4: `Maecenas in pharetra hendrerit neque, tellus eu. Arcu tempus,
    vel blandit adipiscing a sed cursus. Augue vestibulum tempus
    lectus gravida condimentum mauris iaculis. Sodales imperdiet id
    maecenas molestie id.`,
    p5: (
      <ul className="normal roboto font__size--16 text__16-1024 color__gray-1 pl-4 mb-3">
        <li>Id pellentesque ut pellentesque varius amet mauris. </li>
        <li>Tempor, risus, congue gravida nulla tincidunt. </li>
        <li>Tincidunt magnis eu, vitae dictumst. </li>
        <li>Aenean dictumst risus posuere a at id fermentum nibh.</li>
      </ul>
    ),
    subImage: `/images/as (2).png`,
    p6: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
        pellentesque ut pellentesque varius amet mauris. Tempor, risus,
        congue gravida nulla tincidunt nec diam. Tincidunt magnis eu,
        vitae dictumst commodo dolor in. Aenean dictumst risus posuere a
        at id fermentum nibh. Luctus nunc bibendum duis egestas
        scelerisque.`,
    p7: `Maecenas in pharetra hendrerit neque, tellus eu. Arcu tempus,
        vel blandit adipiscing a sed cursus. Augue vestibulum tempus
        lectus gravida condimentum mauris iaculis. Sodales imperdiet id
        maecenas molestie id.`,
  },
]
