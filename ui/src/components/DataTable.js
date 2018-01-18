import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import React from 'react'

function DataTable({ data: {evaluations} }) {
	return (
		<div>
			<table>
				<tbody>
					<tr>
						<td><strong>Year Built</strong></td>
						<td><strong>Floor Area</strong></td>
						<td><strong>Foot Print</strong></td>
						<td><strong>Furnace Type</strong></td>
						<td><strong>Furnace Fuel</strong></td>
					</tr>
					{evaluations && evaluations.map(evaluation => (
						<tr>
							<td>{evaluation.yearBuilt}</td>
							<td>{evaluation.floorArea}</td>
							<td>{evaluation.footprint}</td>
							<td>{evaluation.furnaceType}</td>
							<td>{evaluation.furnaceFuel}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default graphql(gql`
	query {
		evaluations {
			yearBuilt
      		floorArea
      		footprint
      		furnaceType
      		furnaceFuel
		}
	}

`)(DataTable)