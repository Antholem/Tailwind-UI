'use client';
import React, { Fragment, useState } from 'react';
import { Header, Body, Footer, RightSideBar, Fragment as Wrap } from '@/app/_layouts';
import { InstallationList as List } from '@/app/(views)/';
import { Clipboard } from '@/app/_components';
import globalState from '@/app/state';

const Installation = () => {
  const [lastCopied, setLastCopied] = useState<number | null>(null);
  const { darkMode } = globalState();

  const handleCopy = (index: number) => {
    setLastCopied(index);
  };

  return (
    <Fragment>
      <Wrap.Body>
        <div>
          <Header
            title={List.InstallationHeader.title}
            description={List.InstallationHeader.describe}
          />
        </div>
        <div>
          {List.InstallationComponents.map((item) => (
            <Body
              id={item.id}
              href={item.id}
              key={item.id}
              title={item.title}
              description={item.description}
              component={null}
              clipboard={
                <Clipboard
                  language={item.language}
                  sourceCode={darkMode ? item.source.dark : item.source.light}
                  header={item.clipboard}
                  onCopy={() => handleCopy(item.sourceNo)}
                  isCheck={lastCopied === item.sourceNo}
                />
              }
            />
          ))}
        </div>
        <div>
          <Footer />
        </div>
      </Wrap.Body>
      <Wrap.Sidebar>
        <RightSideBar map={List.InstallationComponents} />
      </Wrap.Sidebar>
    </Fragment>
  );
};

export default Installation;
