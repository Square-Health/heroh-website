const FeatureGrid = () => (
  <div
    id="features"
    className="flex flex-col items-center text-center mx-5 my-20"
  >
    <h3 className="text-4xl font-extrabold">Features</h3>
    <p className="text-gray-700 font-medium text-md sm:text-xl sm:max-w-4xl my-2 pb-10">
      Some highlights include...
    </p>
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <FeatureGridItem
        title="Unlimited EHR's"
        description="Create as many Electronic Health Records as you need."
      />
      <FeatureGridItem
        title="Unlimited team sizes"
        description="Invite anyone and everyone. No per seat charges."
      />
      <FeatureGridItem
        title="Company HQ"
        description="A dedicated space to manage your entire clinic."
      />
      <FeatureGridItem
        title="Supervision"
        description="Perform oversight until your staff can work independently."
      />
      <FeatureGridItem
        title="Obtain opinion"
        description="Request reviews, opinions or advice from peers."
      />
      <FeatureGridItem
        title="Electronic Signatures"
        description="No need for signature pads."
      />
      <FeatureGridItem
        title="Team management"
        // description="Manage your workforce permissions with our teams editor."
        description="Manage your workforce permissions."
      />
      <FeatureGridItem
        title="Unlimited clients"
        description="Work with clients &amp; contractors in Heroh."
      />
      {/* <FeatureGridItem
        title="Advanced client access"
        description="Gain total control over what clients can see."
      /> */}
      {/* <FeatureGridItem
        title="Industry templates"
        description="All your OH forms and templates are ready to go with one click."
      /> */}
      <FeatureGridItem
        title="Priority support"
        description="Jump to the front of the line when you need help."
      />
      <FeatureGridItem
        title="Easy roles"
        description="Easily manage access rights through multi-level role support."
      />
      <FeatureGridItem
        title="Audit trails"
        description="Detailed audit log shows you exactly what happened."
      />
      <FeatureGridItem
        title="Files management"
        description="Upload and reference to existing files by scanning them in."
      />
    </div>
  </div>
)

const FeatureGridItem = ({ title, description }) => (
  <div className="flex flex-col items-center text-center bg-orange-50 rounded-xl px-4 py-2">
    <svg
      className="h-6 -mt-5"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
    <span className="text-lg sm:text-xl font-extrabold mt-2">{title}</span>
    <span className="text-md sm:text-lg mb-2">{description}</span>
  </div>
)

export default FeatureGrid
