import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { RxPaperPlane } from "react-icons/rx";
import "./chat.css";
import Header from "./components/Header";
import Sidebar from "./SideBar";

function QuestionPage() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUserMessage(question);
    // Clear the input box
    setQuestion("");
    setResponse("");
    // Hit your /api/questions endpoint
    const result = await fetch(
      "https://one-more-thing-2-0b78fb9fe4b4.herokuapp.com/langchain/api/questions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      }
    );

    if (result.status === 200) {
      const data = await result.json();

      setResponse(data);
    } else {
      // Handle errors here
      console.error("Error:", result);
    }
  };

  return (
    <div
      fluid
      className="d-flex flex-row"
      style={{ minHeight: "100vh", maxHeight: "100vh", background: "#f2f2f2" }}
    >
      <Sidebar />
      <Container>
        <Header />
        <Row className="d-flex justify-content-center">
          <Col md={6}>
            <Card style={{ minHeight: "75vh" }}>
              <Card.Header
                style={{
                  background: "#333",
                  color: "#68E7FD",
                }}
              >
                <h5 className="text-center">Dropwise AI Technnical Support</h5>
                <p className="text-center small text-white">
                  Chat with our Dropwise AI Technnical Support! The Assistant is
                  trained on Every aspect of Dropwise Hydrotech Solution. It can
                  help you with technical questions about the system.
                </p>
              </Card.Header>
              <Card.Body variant="dark">
                <div className="chat-container-wrapper">
                  <div className="chat-container">
                    <div className="chat-message user">{userMessage}</div>
                    <div className="chat-message bot">{response}</div>
                  </div>
                </div>
              </Card.Body>

              <Card.Footer>
                <Form
                  onSubmit={handleSubmit}
                  className="d-flex flex-row justify-content-between mt-3 gap-1 "
                >
                  <Form.Group className="flex-grow-1 mr-2">
                    <Form.Control
                      type="text"
                      placeholder="Ask a question..."
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      style={{ width: "100%" }}
                    />
                  </Form.Group>
                  <Button
                    style={{
                      background: "#333",
                      color: "#68E7FD",
                      border: "none",
                    }}
                    type="submit"
                    className="custom-button"
                  >
                    <RxPaperPlane size={25} />
                  </Button>
                </Form>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default QuestionPage;
