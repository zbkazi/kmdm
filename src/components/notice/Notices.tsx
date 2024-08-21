"use client";
import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Container,
  Grid,
  Button,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import Link from "next/link";
import { Notice } from "@/types/notice";

// Styled Container for responsive design
const StyledContainer = styled(Container)({
  padding: "2rem",
});

// Pagination settings
const ITEMS_PER_PAGE = 3;

const Notices: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [notices, setNotices] = useState<Notice[]>([]);

  useEffect(() => {
    // Simulating fetching data
    fetch("/notices.json")
      .then((response) => response.json())
      .then((data: Notice[]) => setNotices(data))
      .catch((error) => console.error("Error fetching notices:", error));
  }, []);

  const totalPages = Math.ceil(notices.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentNotices = notices.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (direction: "next" | "prev") => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <StyledContainer maxWidth="md">
      <Typography variant="h4" component="h1" className="mb-6 text-center">
        Notices
      </Typography>
      <Grid container spacing={3}>
        {currentNotices.map((notice) => (
          <Grid item xs={12} md={6} lg={4} key={notice.id}>
            <Link href={`/notice/${notice.id}`} passHref>
              <p className="text-blue-500 hover:underline">{notice.title}</p>
            </Link>

            {notice.body
              ? notice.body.length > 40
                ? `${notice.body.substring(0, 40)}....`
                : notice.body
              : "No description available"}
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="space-between" mt={4}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handlePageChange("prev")}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handlePageChange("next")}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </Box>
      <Typography variant="body2" align="center" mt={2}>
        Page {currentPage} of {totalPages}
      </Typography>
    </StyledContainer>
  );
};

export default Notices;
