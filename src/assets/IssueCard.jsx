import Container from './Container';
import States from './States';
import Complain from './Complain';
import Resolve from './Resolve';

const IssueCard = ({ issues, pending, complain, resolve, resolveUpdates }) => {
  const ctIssue = issues;
  const pendingState = pending;
  const resolveUpdate = resolve;
  return (
    <div>
      <Container>
        <div className="flex lg:flex-row flex-col">
          {/* Ticket issues*/}
          <div className="w-full lg:w-2/3">
            <h1 className="text-xl font-semibold lg:px-0 px-4 py-4">
              Customer Tickets
            </h1>
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4 lg:space-y-0 space-y-4 lg:px-0 px-[35px]">
              {ctIssue.map(issue => (
                <Complain
                  key={issue.id}
                  ticketIssue={issue}
                  handleComplain={complain}
                ></Complain>
              ))}
            </div>
          </div>

          <div className="flex flex-col p-4 space-y-4">
            <h1 className="font-semibold text-xl">Task Status</h1>
            <div className="space-y-4">
              {/*task status */}
              {pendingState.length === 0 ? (
                <p className="text-gray-500 italic">
                  Select a ticket to add to Task Status
                </p>
              ) : (
                pendingState.map(handle => (
                  <States
                    resolve={resolveUpdates}
                    key={handle.id}
                    totalComplain={handle}
                  />
                ))
              )}
              {/* Resolved task*/}
              <div className="space-y-4">
                <h1 className="text-xl font-semibold">Resolved Task</h1>
                {resolveUpdate.length === 0 ? (
                  <p className="text-gray-500 italic">No resolved tasks yet.</p>
                ) : (
                  resolveUpdate.map(issue => (
                    <Resolve key={issue.id} resolve={issue} />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default IssueCard;
