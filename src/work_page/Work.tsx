import './Work.css';
const Work = () => {
  return (
    <div className="Work">
      <div className="content">
        <h3>Some creative and technical accomplishments, unordered.</h3> <hr />
        {/* Project myrescue.dog*/}
        <div className="project ">
          <h4 className="title">"It's like Facebook, but for dogs."</h4>
          <div className="details">
            <p>
              <strong>Description</strong> <br />
              <br />
              Donuts Inc, wanted to increase sales of their top-level domain{' '}
              <em>dot dog</em> by creating a site, www.MyRescue.dog. Users
              uploaded photos and stories of their rescue dogs, which were voted
              on. The top dog (lol) won 25K for their rescue.
            </p>
            <p>
              <strong>Outcome</strong> <br />
              <br />
              The site went viral on Twitter, resulting in 250K active users in
              30 days. At peak, the site had 80k simultanous users voting and
              recieving updates in real time.
            </p>
            <p>
              <strong>Approach</strong> <br />
              <br />
              At this time I had only ever written front-end code, and the
              stakeholders were not confident a single developer could perform
              better than an experienced 3rd-party.
              <br />
              <br />I had a secondary goal of proving to my employer that
              JavaScript backends would grow our client base by empowering more
              devs-- so I pitched everyone on building the app in NodeJS and
              Mongo (Meteor). This would allow a front-end dev to own the full
              stack without the cost of a language change and support a high
              number of simultanous users.
              <br />
              <br />
              When a stakeholder asked what assurances they had that our
              internal experiment would pay off, I said, none, but if I fail I
              will resign.
            </p>
            <p>
              <strong>Biggest Challenge</strong> <br />
              <br />
              Users very much enjoyed scrolling through the site. So much so
              that our telemetry library alerted me to very large memory usage
              on client machines. <br />
              <br />
              Too many dogs were loaded into the DOM. <br />
              <br />I had to diagnose and resolve the problem at peak hours,
              which made my heart beat harder for some time.
            </p>
          </div>
        </div>
        {/* Project large-migration*/}
        <hr />
        <div className="project">
          <h4 className="title">
            "We need to migrate our entire system with no downtime."
          </h4>
          <div className="details">
            <p>
              <strong>Description</strong> <br />
              <br /> A client in a heavily regulated industry discovered their
              application architecture was fundamentally insecure.
              <br />
              <br />
              The applications were actively used at all hours and couldn't
              sustain extended downtime.
            </p>
            <p>
              <strong>Outcome</strong> <br />
              <br />
              Migrated all backend applications, services, and databases from an
              insecurely configured VPC into a secure one with 0 downtime, while
              maintaining data integrity.
            </p>
            <p>
              <strong>Approach</strong> <br />
              <br />
              So many steps: <br />
              <br />
              Map all dependencies in the ecosystem. <br />
              Use infrastructure as code solutions to duplicate entities into
              the new VPC. <br />
              Stream DB writes across the VPCs to maintain a read-only db.{' '}
              <br />
              Use a script to blue-green deploy client applications at the DNS
              level, allowing them to use newly configured apis to write to the
              secure db, completing the migration.
            </p>
            <p>
              <strong>Biggest Challenge</strong> <br />
              <br /> Sequencing! This backend had many applications in various
              states of organizational memory, and also needed permissions
              changes across the board. Keeping tasks organized and sequenced
              was difficult.
              <br />
              <br />I required engineering support as the tasks were numerous,
              so leading the team to stay in-sequence was kind of like running a
              4x4 relay except the baton is a dry spaghetti noodle.
            </p>
          </div>
        </div>
        {/* Project fancy banners*/}
        <hr />
        <div className="project">
          <h4 className="title">
            Rewrites, Upgrades, and more of The World's Most Expensive Things
          </h4>
          <div className="details">
            <p>
              <strong>Description</strong>
              <br />
              <br /> At multiple times in my career I've inherited legacy
              applications and legacy platforms that required expensive rewrites
              and upgrades.
              <br />
              <br />
              Through this experience I've developed a set of flexible
              principles that have sped up my approach and helped bring the
              total costs of these efforts down.
            </p>
            <p>
              <strong>Approach / Philosophy</strong>
              <ul>
                <li>
                  Before a rewrite, consider a very ambitious refactor with a
                  good test harness.
                </li>
                <li>
                  Base your decision making on a proven pattern (SOLID,
                  Evolutionary Architecture). Return to the pattern in times of
                  executional stress.
                </li>
                <li>Don't build for perfection. Build for flexibility.</li>
              </ul>
            </p>
            <p>
              <strong>Recent Outcomes</strong>
              <br />
              <ul>
                <li>
                  Rewrote a Laravel / JQuery site in React / Nodejs for
                  Coronausa.com
                </li>
                <li>Rewrote a .NET site in React / Nodejs for Pataks.com</li>
                <li>
                  Upgraded Liftmaster.com and Chamberlain.com to independently
                  deployable front-ends and an atomic design system.
                </li>
                <li>
                  Phonegap to Flutter. AngularJS to Angular. Native Windows app
                  to Angular + electron. AngularJS to React. Laravel to NestJS.
                </li>
              </ul>
            </p>

            <p>
              <strong>Biggest Challenge</strong> <br />
              <br />
              Rewrites, upgrades, and serious refactors all require a tremendous
              non-technical effort: maintaining organization momentum to see
              them through.
              <br />
              <br />
              No one wants to hear about the upgrade. No one wants to estimate
              the cost of the rewrite.
              <br />
              <br />
              The biggest challenge of these efforts is definitely in inspiring
              stakeholders to see the vision, and influencing engineering teams
              to be creative over time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
