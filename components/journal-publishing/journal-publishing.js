import React, { useState } from 'react';
import SecureTemplate from '@/layout/secure-template';
import { Paper } from '@material-ui/core';
import RadioTabs from '@/components/radio-tabs';
import { TabPanel } from '@/components/radio-tabs/radio-tabs';
import {
  DataUpload,
  Reviews,
} from '@/components/journal-publishing/components';
import { useRouter } from 'next/router';
import { BasicInfo } from './basic-info/components/basic-info';

const JournalPublishing = () => {
  const router = useRouter();
  const { journalId } = router.query;
  const [value, setValue] = useState(0);
  return (
    <SecureTemplate title="JournalPublishing">
      <div className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header card-header-primary">
              <h3 className="card-title">Journal Publishing</h3>
              <p className="card-category">
                Here you can upload your journal with proper information
              </p>
            </div>
            <div className="card-body">
              <Paper square>
                <RadioTabs
                  headings={['Masthead', 'Upload', 'Reviews']}
                  value={value}
                  setValue={setValue}
                >
                  <TabPanel value={value} index={0}>
                    <BasicInfo />
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <DataUpload />
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    <Reviews />
                  </TabPanel>
                </RadioTabs>
              </Paper>
            </div>
          </div>
        </div>
      </div>
    </SecureTemplate>
  );
};
export default JournalPublishing;
