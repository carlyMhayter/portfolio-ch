import Image from 'next/image';

const classString = 'project-img-container fineart-img-container';

const fineArtPics = [
  {
    imgLoc: '/male-figure1.jpg',
    imgWidth: '300px',
    imgHeight: '500px',
    imgTitle: 'Male Figure from Life',
    imgDescription: 'Charcoal on newsprint, 2021. 2.5hr pose.',
    altText: 'male figure drawing',
    sizeClass: `${classString}-long`,
  },
  {
    imgLoc: '/color-leaves.png',
    imgWidth: '300px',
    imgHeight: '400px',
    imgTitle: 'Untitled',
    imgDescription: 'Watercolor. 2011',
    altText: 'rainbow watercolor leaves',
    sizeClass: `${classString}-med`,
  },
  {
    imgLoc: '/hazel-drawing.jpg',
    imgWidth: '300px',
    imgHeight: '400px',
    imgTitle: 'Pen Portrait',
    imgDescription: 'Pen on paper. 2013',
    altText: 'pen portrait drawing of friend',
    sizeClass: `${classString}-med`,
  },
  {
    imgLoc: '/dylan-painting.jpg',
    imgWidth: '300px',
    imgHeight: '400px',
    imgTitle: 'Dylan',
    imgDescription: 'Acrylic on Board. 2014',
    altText: 'portrait painting on board',
    sizeClass: `${classString}-med`,
  },
  {
    imgLoc: '/kristian-painting.jpg',
    imgWidth: '300px',
    imgHeight: '400px',
    imgTitle: 'Kristian',
    imgDescription: 'Acrylic on Board. 2011',
    altText: 'portrait painting on board of man',
    sizeClass: `${classString}-med`,
  },
];

function Home() {
  return (
    <div className="page-content fineart-page-content">
      <div className="gallery-container fineart-gallery-container">
        {fineArtPics.map((pic) => (
          <div
            key={pic.imgLoc}
            className="project-container project-container-fineart "
          >
            <div className={pic.sizeClass}>
              <Image
                alt={pic.altText}
                className="project-img"
                src={pic.imgLoc}
                layout="fill"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAFA4PEg8NFBIQEhcVFBgeMiEeHBwePSwuJDJJQExLR0BGRVBac2JQVW1WRUZkiGVtd3uBgoFOYI2XjH2Wc36BfP/bAEMBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIAGsAawMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQACAwEGB//EAB0QAQADAQEAAwEAAAAAAAAAAAABAgMhMQQREkH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEQMRAD8A9miICMNm4baQC39Svqt565WeijMhMeBMpFVn7gFkRBHJ8CbCrTwHtIA9fWLTWesfsR6JEQVyfAe9vRWk/VS/e3oML265W3WOl+uUv0UxysMztwtyuNysApFK2dm3BFdJ4C2sI0sB2sAbWzH9O62YfpWXrERyfEaY724W/Iv6N3t6V/It6AbS/XKX6w1v1Sl+o0a43HZXKsbjsrAPrZ2bcYVstNlRXSwHawjSwHewyG2uw/abXD/tUe7VvP1CzPSeI0D+RPpV8m3pl8ifSr5M+gXbW6rnbqu09UznqNwzwsYZWLMJMMpEGVtxabcZVni0zxUZ6WAb2GaSA3kZA72DfptvIWZ6rNfRmWvjVnr4jZfv/Sr5P9Nt49LPkR6BTtHVM46I1r1Sleo1BWED8geNR2UAIr47KVjjswqB9PAO4/SAO8DJZuFmOjdoDTVWa+hqaeLq38RsBvHpbvHpptHpdvHoFuleq0r1vevXKV6jTbGo3OA2UDM4BpWHZhasJMKgbSAW0D9IBbQMlu0MPyL1hh9Ky90rbxZy3iNg9i/aPTDYv2AFeOuVjq1/XK+o0JygXnAXIXmDaISUh2VQPoC2HaAthkBrDD6EasFR/9k=
                "
              />
            </div>
            <div className="project-text-container">
              <p className="project-title">{pic.imgTitle}</p>
              <p className="project-description">{pic.imgDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Home;
