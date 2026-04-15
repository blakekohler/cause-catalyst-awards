// Praiz API client for Cause Catalyst Awards
const PRAIZ_API = window.PRAIZ_API_URL || 'https://praiz-two.vercel.app';
const PROGRAM_SLUG = 'cause-catalyst';

const PraizAPI = {
  _programCache: null,

  async getProgram() {
    if (this._programCache) return this._programCache;
    const res = await fetch(`${PRAIZ_API}/api/programs/${PROGRAM_SLUG}`);
    if (!res.ok) throw new Error('Failed to load program');
    this._programCache = await res.json();
    return this._programCache;
  },

  async submitNomination(data) {
    const res = await fetch(`${PRAIZ_API}/api/nominations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    if (!res.ok) throw { status: res.status, ...json };
    return json;
  },

  async getNomineeStatus(token) {
    const res = await fetch(`${PRAIZ_API}/api/nominees/${token}`);
    if (!res.ok) throw new Error('Invalid or expired token');
    return res.json();
  },

  async submitNomineeProfile(token, data) {
    const res = await fetch(`${PRAIZ_API}/api/nominees/${token}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    if (!res.ok) throw { status: res.status, ...json };
    return json;
  },

  async submitReference(token, data) {
    const res = await fetch(`${PRAIZ_API}/api/references/${token}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    if (!res.ok) throw { status: res.status, ...json };
    return json;
  },

  async getWinners(year) {
    let url = `${PRAIZ_API}/api/programs/${PROGRAM_SLUG}/winners`;
    if (year) url += `?year=${year}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to load winners');
    return res.json();
  },
};
