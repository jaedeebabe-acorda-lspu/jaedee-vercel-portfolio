import React from "react"
import styled from "styled-components"

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`;

const Description = styled.div`
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`;

const Span = styled.span`
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`;

const Year = styled.span`
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 5px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }

`;

const Card = styled.div`
    width: 650px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    padding: 12px 16px;
    background: ${({ theme }) => theme.card_light};
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

    &:hover ${Document}{
        display: flex;
    }

    &:hover ${Span}{
        overflow: visible;
        -webkit-line-clamp: unset;

    }
    border: 3px solid #ff900e;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`;

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px
`;

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`;


const Title = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: rgba(236, 242, 248, 0.856);
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`;

const Company = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: rgba(236, 242, 248, 0.872);
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`;

const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: rgba(236, 242, 248, 0.683);
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`;


const Skills = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
    margin-top: -10px;
`;

const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

const Skill = styled.div`
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`;


const ExperienceCard = ({ experience }) => {
    return (
        <Card>
            <Top>
            <Body>
                <Title>{experience.title}</Title>
                <Company>{experience.company}</Company>
                <Date>{experience.date}</Date>
            </Body>
            </Top>
            <Description>
                {experience?.yr1 &&
                    <Year>{experience?.yr1}</Year>
                }
                {experience?.desc1 &&
                    <Span>• &nbsp;{experience?.desc1}</Span>
                }
                {experience?.desc2 &&
                    <Span>• &nbsp;{experience?.desc2}</Span>
                }
                {experience?.desc3 &&
                    <Span style={{marginBottom: '5px', color: 'inherit'}}>• &nbsp;{experience?.desc3}</Span>
                }
                {experience?.yr2 &&
                    <Year>{experience?.yr2}</Year>
                }
                {experience?.desc4 &&
                    <Span>• &nbsp;{experience?.desc4}</Span>
                }
                {experience?.desc5 &&
                    <Span>• &nbsp;{experience?.desc5}</Span>
                }
                {experience?.skills &&
                    <>
                        <br />
                        <Skills>
                            <b>Skills:</b>
                            <ItemWrapper>
                                {experience?.skills?.map((skill, index) => (
                                    <Skill>• {skill}</Skill>
                                ))}
                            </ItemWrapper>
                        </Skills>
                    </>
                }
            </Description>
            {experience.doc &&
                <a href={experience.doc} target="new">
                    <Document src={experience.doc} />
                </a>
            }
        </Card>
    )
}

export default ExperienceCard