// src/app/notice/[id]/page.tsx
import fs from 'fs';
import path from 'path';
import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Container } from '@mui/material';
import { styled } from '@mui/system';

interface Notice {
  id: number;
  title: string;
  body: string;
}

// Styled Card Component
const StyledCard = styled(Card)({
  marginBottom: '1rem',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  borderRadius: '0.5rem',
});

// Styled Container for responsive design
const StyledContainer = styled(Container)({
  padding: '2rem',
});

// Fetch notices data from the JSON file
const getNotices = () => {
  const dataPath = path.join(process.cwd(), 'public', 'notices.json');
  const fileContent = fs.readFileSync(dataPath, 'utf-8');
  return JSON.parse(fileContent);
};

// Generate static params for the dynamic routes
export async function generateStaticParams() {
  const notices = getNotices();
  return notices.map((notice: Notice) => ({
    id: notice.id.toString(),
  }));
}

// Component to display notice details
const NoticeDetail: React.FC<{ params: { id: string } }> = ({ params }) => {
  const { id } = params;
  const [notice, setNotice] = useState<Notice | null>(null);

  useEffect(() => {
    if (id) {
      const notices = getNotices();
      const selectedNotice = notices.find(
        (n: Notice) => n.id === parseInt(id, 10)
      );
      setNotice(selectedNotice || null);
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
