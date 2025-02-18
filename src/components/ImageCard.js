import styled from "styled-components";

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
`;

function ImageCard({ candidate, onSelect }) {
  return (
    <Card onClick={onSelect}>
      <img
        src={candidate.image || "/placeholder.svg"}
        alt={candidate.name}
        width={300}
        height={300}
        layout="responsive"
      />
      <CardContent>
        <CardTitle>{candidate.name}</CardTitle>
      </CardContent>
    </Card>
  );
}

export default ImageCard;
