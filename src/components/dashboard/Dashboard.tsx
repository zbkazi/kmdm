import Layout from '@/app/layout'
import React from 'react'



interface DashboardProps {
  title: string;
}


const Dashboard: React.FC<DashboardProps> = ({ title }) => {
  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        {/* Other content can go here */}
      </div>
    </Layout>
  );
};


export default Dashboard