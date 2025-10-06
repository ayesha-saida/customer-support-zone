import React, { use } from 'react';
import { useState } from 'react';
import ManagementCard from '../cardComponents/ManagementCard';
import IssueCard from '../cardComponents/IssueCard';
import { toast } from 'react-toastify';
const IssueManagement = ({ promise }) => {
  const data = use(promise);
  //console.log(data);

  const [issues, setIssue] = useState(data);

  const [pendingState, setPendingIssue] = useState([]);

  const [resolveState, setresolveIssue] = useState([]);

  /*Issues progress tracking */
  const handleComplain = issue => {
    //console.log(issue);
    toast('In Progreess');
    const isExist = pendingState.find(complain => complain.id == issue.id);

    if (isExist) {
      toast.error('Issues allready on Processing');
      return;
    }

    //clicked ticket issues will enter into task state
    const taskState = [...pendingState, issue];
    setPendingIssue(taskState);
  };

  /*Issues resolving update */
  const resolveUpdate = resolve => {
    //console.log(resolve);
    toast('Resolve');
    // 1. Insert the issues that are on progress
    const resolvedTask = [...resolveState, resolve];
    setresolveIssue(resolvedTask);

    //2. plus remove the current issue from task state
    const remaining = pendingState.filter(issue => issue.id !== resolve.id);
    setPendingIssue(remaining);

    //3.Issues deleting after resolved
    const remainingIssues = issues.filter(issue => issue.id !== resolve.id);
    setIssue(remainingIssues);
  };
  //console.log(resolveState);

  return (
    <div className="bg-gray-200 lg:py-6 py-0">
      <ManagementCard
        totalPending={pendingState.length}
        resolved={resolveState.length}
      ></ManagementCard>

      <section>
        <IssueCard
          issues={issues}
          pending={pendingState}
          complain={handleComplain}
          resolve={resolveState}
          resolveUpdates={resolveUpdate}
        ></IssueCard>
      </section>
    </div>
  );
};

export default IssueManagement;
