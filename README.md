Right Track Transit Agency (Abstract)
=====================================

**node module:** [right-track-transit](https://www.npmjs.com/package/right-track-transit)<br />
**GitHub repo:** [right-track/right-track-transit](https://github.com/right-track/right-track-transit)

---

This is an abstract **Right Track Transit Agency**.  This module provides the
abstract  `RightTrackTransitAgency` class which is extended by an implementing
Right Track Transit Agency.

This module also includes the **Transit Feed** Classes: `TransitFeed`, `TransitDivision`,
`TransitLine`, and `TransitEvent`, which are all required when a Transit Agency implements
the real-time Transit Feed functionality.

### Documentation

Documentation can be found in the **/doc/** directory of this repository
or online at [https://docs.righttrack.io/right-track-transit](https://docs.righttrack.io/right-track-transit).

### Supported Agencies

The following are Right Track Transit Agencies that implement this abstract class:

- [Metropolitan Transportation Authority (mta)](https://github.com/right-track/right-track-transit-mta)
- [NYS Thruway Authority (nysta)](https://github.com/right-track/right-track-transit-nysta)

### Transit Feed

A **Transit Feed** provides a list of real-time transit events.  A Transit Feed
is broken down into a hierarchical system where a single **Transit Feed** includes
one or more **Divisions**, which in turn includes one or more **Lines**.  A line
will have an operating status and may include one or more **Events**, which contain
real-time transit status information.

To load an agency-specific `TransitFeed`, use the `loadFeed(callback)`
function where:
- `callback` is a callback function: `function(err, feed)`
    - accepting an `Error` and `TransitFeed` as arguments.

See the Documentation for more information on the structure of a `TransitFeed`.


### Example
