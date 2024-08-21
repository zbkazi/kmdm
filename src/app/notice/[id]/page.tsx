// src/app/notice/[id]/page.tsx
"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Container } from "@mui/material";
import { styled } from "@mui/system";

interface Notice {
  id: number;
  title: string;
  body: string;
}

// Styled Card Component
const StyledCard = styled(Card)({
  marginBottom: "1rem",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  borderRadius: "0.5rem",
});

// Styled Container for responsive design
const StyledContainer = styled(Container)({
  padding: "2rem",
});

const NoticeDetail: React.FC = () => {
  const router = useRouter();
  const { id } = useParams();
  const [notice, setNotice] = useState<Notice | null>(null);

  useEffect(() => {
    if (id) {
      // Fetch JSON data from the public directory
      fetch("/notices.json")
        .then((response) => response.json())
        .then((data) => {
          const selectedNotice = data.find(
            (n: Notice) => n.id === parseInt(id as string, 10)
          );
          setNotice(selectedNotice || null);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [id]);

  if (!notice) {
    return (
      <StyledContainer maxWidth="md">
        <Typography variant="h4" component="h1" className="mb-6 text-center">
          Notice Not Found
        </Typography>
      </StyledContainer>
    );
  }

  return (
    <StyledContainer maxWidth="md">
      <Typography variant="h4" component="h1" className="mb-6 text-center">
        {notice.title}
      </Typography>
      <StyledCard>
        <CardContent>
          <Typography variant="body1">{notice.body}</Typography>
        </CardContent>
      </StyledCard>
    </StyledContainer>
  );
};

export default NoticeDetail;
