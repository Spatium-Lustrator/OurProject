import React, { useState } from "react";
import { Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import { Autocomplete, TextField } from "@mui/material";
import { INSTITUTEPAGE_ROUTE } from "../Router/Consts";

const InstitutesPage = () => {
  const [value, setValue] = useState("");
  const institutes = [
    "Высшая школа экономики",
    "МГУ им. Ломоносова ",
    "Московский физико-технический институт",
    "Московский государственный технический университет имени Н.Э.Баумана",
    "МИФИ",
    "МИСиС",
    "Уральский федеральный университет им. Ельцина",
    "Томский политехнический университет",
    "Российский экономический университет имени Г.В. Плеханова",
    "Санкт-Петербургский горный университет ",
    "ИТМО ",
    "Российская экономическая школа",
    "Финансовый университет при Правительстве РФ ",
    "РАНХиГС ",
    "Санкт-Петербургский политехнический университет Петра Великого",
    "Санкт-Петербургский госуниверситет",
    "Российский химико-технологический университет имени Д.И. Менделеева",
    "Ярославский государственный технический университет",
    "МЭИ ",
    "Балтийский государственный технический университет «ВОЕНМЕХ» им. Устинова",
  ];
  const [universities, setUniversities] = useState(institutes.sort());

  return (
    <Container>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={universities}
        sx={{ width: 300, margin: "auto", marginBottom: "20px" }}
        renderInput={(params) => <TextField {...params} label="ВУЗы" />}
      />
      <ListGroup
        style={{ margin: "auto", maxWidth: "600px", marginBottom: "50px" }}
      >
        {universities.map((institute) => (
          <ListGroup.Item style={{ maxWidth: "600px", textDecoration: "none" }}>
            <Row style={{ textDecoration: "none" }}>
              <a
                style={{ color: "black", textDecoration: "none" }}
                href={INSTITUTEPAGE_ROUTE}
              >
                {institute}
              </a>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default InstitutesPage;
