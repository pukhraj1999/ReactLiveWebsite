import web from "../Images/webDevelop.jpg";
import app from "../Images/AppDevelop.jpg";
import software from "../Images/SoftwareDevelop.jpg";
import digital from "../Images/DigitalDevelop.jpg";
import game from "../Images/GameDevelop.jpg";
import market from "../Images/Marketing.jpg";

const BlogArr = [
  {
    id: "1",
    img: web,
    title_1: "Web Development",
    content_1:
      "Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.",
    title_2: "Full-Stack Development",
    content_2:
      "Full-stackers take care of both the front-end and the back-end, and need to know how the web works on all levels, in order to determine how the client- and server-sides will relate. Naturally working up to this level of expertise will take longer, as there is more to learn.",
    title_3: "Front-End Development",
    content_3:
      "Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly. The challenge associated with front end development is that the tools and techniques used to create the front end of a website change constantly and so the developer needs to constantly be aware of how the field is developing.The objective of designing a site is to ensure that when the users open up the site they see the information in a format that is easy to read and relevant. This is further complicated by the fact that users now use a large variety of devices with varying screen sizes and resolutions thus forcing the designer to take into consideration these aspects when designing the site. They need to ensure that their site comes up correctly in different browsers (cross-browser), different operating systems (cross-platform) and different devices (cross-device), which requires careful planning on the side of the developer.",
    title_4: "Back-End Development",
    content_4:
      "Back end Development refers to the server side of development where you are primarily focused on how the site works. Making updates and changes in addition to monitoring functionality of the site will be your primary responsibility. This type of web development usually consists of three parts: a server, an application, and a database. Code written by back end developers is what communicates the database information to the browser. Anything you can’t see easily with the eye such as databases and servers is the work of a back end developer.  Back end developer positions are often called programmers or web developers.",
    title_5: "",
    content_5: "",
    title_6: "",
    content_6: "",
  },
  {
    id: "2",
    img: app,
    title_1: "App Development",
    content_1:
      "App development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones.As part of the development process, mobile user interface (UI) design is also essential in the creation of mobile apps.",
    title_2: "React Native",
    content_2:
      "React Native is an open-source mobile application framework created by Facebook, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use React's framework along with native platform capabilities. ",
    title_3: "Flutter",
    content_3:
      "Flutter is an open-source UI software development kit created by Google. It is used to develop applications for Android, iOS, Linux, Mac, Windows, Google Fuchsia, and the web from a single codebase. The first version of Flutter was known as codename (Sky) and ran on the Android operating system",
    title_4: "",
    content_4: "",
    title_5: "",
    content_5: "",
    title_6: "",
    content_6: "",
  },
  {
    id: "3",
    img: software,
    title_1: "Software Development",
    content_1:
      "A software development process (also known as a software development methodology, model, or life cycle) is a framework that is used to structure, plan, and control the process of developing information systems. A wide variety of such frameworks has evolved over the years, each with its own recognized strengths and weaknesses. There are several different approaches to software development: some take a more structured, engineering-based approach to developing software, whereas others may take a more incremental approach, where software evolves as it is developed piece-by-piece. One system development methodology is not necessarily suitable for use by all projects. Each of the available methodologies is best suited to specific kinds of projects, based on various technical, organizational, project, and team considerations.",
    title_2: "Planning process",
    content_2:
      "Planning is an objective of each and every activity, where we want to discover things that belong to the project. An important task in creating a software program is extracting the requirements or requirements analysis.[6] Customers typically have an abstract idea of what they want as an end result but do not know what software should do. Skilled and experienced software engineers recognize incomplete, ambiguous, or even contradictory requirements at this point. Frequently demonstrating live code may help reduce the risk that the requirements are incorrect. ",
    title_3: "Designing",
    content_3:
      "Once the requirements are established, the design of the software can be established in a software design document. This involves a preliminary or high-level design of the main modules with an overall picture (such as a block diagram) of how the parts fit together. The language, operating system, and hardware components should all be known at this time. Then a detailed or low-level design is created, perhaps with prototyping as proof-of-concept or to firm up requirements. ",
    title_4: "Deployment management",
    content_4:
      "Development management is the process of pro-actively managing development in a local area to achieve the local planning vision and objectives. ... Development control was considered to place too much emphasis on processing and controlling planning applications and using enforcement powers.",
    title_5: "",
    content_5: "",
    title_6: "",
    content_6: "",
  },
  {
    id: "4",
    img: digital,
    title_1: "Digital Development",
    content_1:
      "A digital developer is a technical expert who designs, develops, and maintains websites and other online applications or services. In this career, you need strong skills in front-end web development and years of experience working with information architecture and design interfaces in technology.",
    title_2: "Principal of Digital Development",
    content_2:
      "The Principles for Digital Development are a set of nine guidelines for integrating best practices into technology-enabled development programs for international development and cooperation.",
    title_3: "History",
    content_3:
      "The seed for the Digital Principles began in 2009 when UNICEF launched their Principles for Innovation and Technology Development. A year later, meetings amongst 40 mhealth donors produced the Greentree Principles. A (Principles for Digital Development Working Group) was launched in 2014.The group met nine times throughout the year during which over 500 individuals representing more than 100 organizations took part. Following the Working Group meetings an endorsement campaign began in 2016, led by USAID, and 54 organizations endorsed the new Principles for Digital Development. In 2016, the United Nations Foundation's Digital Impact Alliance became steward of the Principles for Digital Development to help facilitate their adoption",
    title_4: "",
    content_4: "",
    title_5: "",
    content_5: "",
    title_6: "",
    content_6: "",
  },
  {
    id: "5",
    img: game,
    title_1: "Game Development",
    content_1:
      "Game Development is the art of creating games and describes the design, development and release of a game. It may involve concept generation, design, build, test and release. While you create a game, it is important to think about the game mechanics, rewards, player engagement and level design",
    title_2: "Unity Game Engine",
    content_2:
      "Unity is a cross-platform game engine developed by Unity Technologies, first announced and released in June 2005 at Apple Inc.'s Worldwide Developers Conference as a Mac OS X-exclusive game engine. As of 2018, the engine had been extended to support more than 25 platforms.",
    title_3: "Unreal Game Engine",
    content_3:
      "The Unreal Engine is a game engine developed by Epic Games, first showcased in the 1998 first-person shooter game Unreal. Although initially developed for first-person shooters, it has been used in a variety of genres, including platformers, fighting games, and MMORPGs, and has seen adoption by other markets, most notably the film and television industry. Written in C++, the Unreal Engine features a high degree of portability, supporting a wide range of platforms.The latest release is Unreal Engine 4, which launched in 2014 under a subscription model. Since 2015, it can be downloaded for free, with its source code available on a GitHub private repository. Epic allows for its use in commercial products based on a royalty model, typically asking developers for 5% of revenues from sales, though with the success of Fortnite, which has become a testbed for Unreal Engine for Epic, Epic waives this fee for developers that publish their games through the Epic Games Store. On May 13, 2020, Epic announced that their portion of royalties for games developed in Unreal Engine are waived until developers have earned their first US$1 million in revenue, retroactively applying to January 1, 2020. Unreal Engine 5 is scheduled for release by late 2021. ",
    title_4: "",
    content_4: "",
    title_5: "",
    content_5: "",
    title_6: "",
    content_6: "",
  },
  {
    id: "6",
    img: market,
    title_1: "Marketing",
    content_1:
      "Marketing refers to activities a company undertakes to promote the buying or selling of a product, service, or good. It is one of the primary components of business management and commerce. Marketers can direct their product to other businesses or directly to consumers. ",
    title_2: "Understanding Marketing",
    content_2:
      "Marketing as a discipline involves all the actions a company undertakes to draw in customers and maintain relationships with them. Networking with potential or past clients is part of the work too, and may include writing thank you emails, playing golf with prospective clients, returning calls and emails quickly, and meeting with clients for coffee or a meal. ",
    title_3: "Product",
    content_3:
      "Product refers to an item or items the business plans to offer to customers. The product should seek to fulfill an absence in the market, or fulfill consumer demand for a greater amount of a product already available. Before they can prepare an appropriate campaign, marketers need to understand what product is being sold, how it stands out from its competitors, whether the product can also be paired with a secondary product or product line, and whether there are substitute products in the market. ",
    title_4: "Place",
    content_4:
      "Place refers to the distribution of the product. Key considerations include whether the company will sell the product through a physical storefront, online, or through both distribution channels. When it's sold in a storefront, what kind of physical product placement does it get? When it's sold online, what kind of digital product placement does it get? ",
    title_5: "Promotion",
    content_5:
      "Promotion, the fourth P, is the integrated marketing communications campaign. Promotion includes a variety of activities such as advertising, selling, sales promotions, public relations, direct marketing, sponsorship, and guerrilla marketing. ",
    title_6: "",
    content_6: "",
  },
];

export default BlogArr;
