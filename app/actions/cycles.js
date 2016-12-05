import request from 'superagent';

export const FETCH_CYCLES_REQUEST = 'FETCH_CYCLES_REQUEST';
function requestCycles() {
  return {
    type: FETCH_CYCLES_REQUEST,
  };
}

export const FETCH_CYCLES_RECIEVE = 'FETCH_CYCLES_RECIEVE';
function recieveCycles(cycles) {
  return {
    type: FETCH_CYCLES_RECIEVE,
    cycles,
  };
}

export const FETCH_CYCLES_FAILURE = 'FETCH_CYCLES_FAILURE';
function recieveCyclesError(error) {
  return {
    type: FETCH_CYCLES_FAILURE,
    error,
  };
}

export function fetchCycles() {
  return (dispatch) => {
    dispatch(requestCycles());

    return Promise.all([
      request.get('/jobs.json'),
      request.get('/applications.json'),
      request.get('/candidates.json'),
    ]).then(([jobsRes, applicationsRes, candidatesRes]) => {
      const jobs = jobsRes.body;
      const applications = applicationsRes.body;
      const candidates = candidatesRes.body;
      const cycles = jobs
        .sort((a, b) => {
          return new Date(a.opened_at) - new Date(b.opened_at);
        })
        .map((job) => {
          return Object.assign({}, job, {
            name: job.name,
            candidates: candidates.filter((c) => {
              return c.applications.find(a => a.jobs.find(j =>
                j.id === job.id));
            }),
            location: job.offices.length
                      ? job.offices[0].name
                      : 'Not set',
            applications: applications.filter(a => a.jobs.find(j =>
              j.id === job.id))
          });
        })
        .filter(cycle => cycle.candidates.length);

      dispatch(recieveCycles(cycles));
    }).catch((err) => {
      dispatch(recieveCyclesError(err));
    });
  };
}
