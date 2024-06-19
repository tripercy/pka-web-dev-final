import "./Latest.css"

export default function Latest() {
    const changes = [
        { text: 'Added new authentication feature.', time: '10 minutes ago' },
        { text: 'Fixed bugs in the payment gateway.', time: '30 minutes ago' },
        { text: 'Updated the user profile UI.', time: '1 hour ago' },
        { text: 'Improved performance of data fetching.', time: '3 hours ago' },
        { text: 'Refactored codebase for better readability.', time: '1 day ago' },
    ];

    return (
        <div className=" latest-changes flex-column left-panel px-3 py-3 text-bg-dark ">
            <h3>Latest Changes</h3>
            <ul>
                {changes.map((change, index) => (
                    <li key={index}>
                        <time>{change.time}</time>
                        <span className='dot'></span>
                        <a href="/home">{change.text}</a>
                    </li>
                ))}
            </ul>
            <a href="/" className="view-changelog">View changelog</a>
        </div>
    );
}