(() => {
  const MESSAGE = 'Add published-insights.csv to the repository data folder.';
  const URL = 'https://www.gtlaw.com.au/content-maintainance-guide/insights-report/published-insights-csv';

  function addSourceTip() {
    const candidates = document.querySelectorAll('p, div, span');

    for (const element of candidates) {
      if (element.textContent.trim() !== MESSAGE) continue;

      const parent = element.parentElement;
      if (!parent || parent.querySelector(':scope > .source-download-tip')) continue;

      const tip = document.createElement('p');
      tip.className = 'source-download-tip';
      tip.append('Tip: click this URL to download the latest CSV and append with today\'s date: ');

      const link = document.createElement('a');
      link.href = URL;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = URL;

      tip.appendChild(link);
      element.insertAdjacentElement('afterend', tip);
    }
  }

  const style = document.createElement('style');
  style.textContent = `
    .source-download-tip {
      margin: 0.75rem 0 0;
      line-height: 1.45;
    }

    .source-download-tip a {
      color: inherit;
      text-decoration: underline;
      text-underline-offset: 0.15em;
      overflow-wrap: anywhere;
    }

    .source-download-tip a:hover,
    .source-download-tip a:focus-visible {
      text-decoration-thickness: 2px;
    }
  `;
  document.head.appendChild(style);

  addSourceTip();
  new MutationObserver(addSourceTip).observe(document.body, {
    childList: true,
    subtree: true
  });
})();
